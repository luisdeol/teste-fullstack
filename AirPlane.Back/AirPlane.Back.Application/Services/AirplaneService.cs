using System.Collections.Generic;
using System.Linq;
using AirPlane.Back.Core.DTOs;
using AirPlane.Back.Core.Entities;
using AirPlane.Back.Core.Repositories;

namespace AirPlane.Back.Application.Services
{
    public class AirplaneService : IAirplaneService
    {
        private readonly IAirplaneRepository repository;
        public AirplaneService(IAirplaneRepository repository)
        {
            this.repository = repository;

        }
        public Airplane Add(AirplaneAddUpdateDTO dto)
        {
            var airplane = Airplane.CreateAirplane(dto.Codigo, dto.Modelo, dto.QuantidadePassageiros);

            this.repository.Add(airplane);

            return airplane;
        }

        public AirplaneFindResultDTO Find(string codigo)
        {
            var airplane = this.repository.Find(codigo);

            return airplane != null ? 
                new AirplaneFindResultDTO(airplane.Codigo, airplane.Modelo, airplane.QuantidadePassageiros, airplane.DataCriacao):
                null;
        }

        public List<AirplaneFindResultDTO> FindAll()
        {
            return this.repository.FindAll()
                .Select(airplane => 
                    new AirplaneFindResultDTO(airplane.Codigo, airplane.Modelo, airplane.QuantidadePassageiros, airplane.DataCriacao)
                ).ToList();
        }

        public void Remove(string codigo)
        {
            this.repository.Delete(codigo);
        }

        public List<Airplane> Search(string query)
        {
            return this.repository.Search(query);
        }

        public void Update(AirplaneAddUpdateDTO dto)
        {
            var airplane = Airplane.CreateAirplane(dto.Codigo, dto.Modelo, dto.QuantidadePassageiros);

            this.repository.Update(airplane);
        }
    }
}