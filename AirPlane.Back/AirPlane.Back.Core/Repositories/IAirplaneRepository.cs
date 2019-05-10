using System.Collections.Generic;
using AirPlane.Back.Core.Entities;

namespace AirPlane.Back.Core.Repositories
{
    public interface IAirplaneRepository
    {
        void Add(Airplane airplane);
        void Delete(string codigo);
        Airplane Find(string codigo);
        List<Airplane> FindAll();
        List<Airplane> Search(string query);
        void Update(Airplane airplane);
    }
}