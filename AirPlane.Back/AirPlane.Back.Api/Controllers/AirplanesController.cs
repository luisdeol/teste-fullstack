using AirPlane.Back.Application.Services;
using AirPlane.Back.Core.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace AirPlane.Back.Api.Controllers
{
    [Route("api/airplanes")]
    public class AirplanesController : Controller
    {
        private readonly IAirplaneService airPlaneService;
        public AirplanesController(IAirplaneService airPlaneService)
        {
            this.airPlaneService = airPlaneService;
        }

        [HttpGet("{codigo}")]
        public IActionResult GetAirplane(string codigo) {
            var airplane = this.airPlaneService.Find(codigo);

            if (airplane == null) {
                return NotFound();
            }

            return Ok(airplane);
        }

        [HttpGet]
        public IActionResult GetAll() {
            return Ok(this.airPlaneService.FindAll());
        }

        [HttpGet("buscar")]
        public IActionResult Search([FromQuery]string query) {
            return Ok(this.airPlaneService.Search(query));
        }

        [HttpDelete("{codigo}")]
        public IActionResult DeleteAirplane(string codigo) {
            this.airPlaneService.Remove(codigo);

            return NoContent();
        }
    
        [HttpPut]
        public IActionResult Update([FromBody]AirplaneAddUpdateDTO dto) {
            this.airPlaneService.Update(dto);

            return NoContent();
        }

        [HttpPost]
        public IActionResult Create([FromBody]AirplaneAddUpdateDTO dto) {
            var airplane = this.airPlaneService.Add(dto);

            return Ok(airplane);
        }
    }
}