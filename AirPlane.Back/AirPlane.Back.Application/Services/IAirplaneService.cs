using System.Collections.Generic;
using AirPlane.Back.Core.DTOs;
using AirPlane.Back.Core.Entities;

namespace AirPlane.Back.Application.Services
{
    public interface IAirplaneService
    {
        void Remove(string codigo);
        Airplane Add(AirplaneAddUpdateDTO dto);
        void Update(AirplaneAddUpdateDTO dto);
        AirplaneFindResultDTO Find(string codigo);
        List<Airplane> Search(string query);
        List<AirplaneFindResultDTO> FindAll();
    }
}