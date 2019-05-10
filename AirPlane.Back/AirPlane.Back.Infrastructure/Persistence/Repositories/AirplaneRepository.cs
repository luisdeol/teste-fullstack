using System.Collections.Generic;
using System.Linq;
using AirPlane.Back.Core.Entities;
using AirPlane.Back.Core.Exceptions;
using AirPlane.Back.Core.Repositories;
using Microsoft.EntityFrameworkCore;

namespace AirPlane.Back.Infrastructure.Persistence.Repositories
{
    public class AirplaneRepository : IAirplaneRepository
    {
        private readonly AirplaneContext context;
        public AirplaneRepository(AirplaneContext context)
        {
            this.context = context;

        }
        public void Add(Airplane airplane)
        {
            this.context.Add(airplane);
            this.context.SaveChanges();
        }

        public void Delete(string codigo)
        {
            var airplane = this.context.Airplanes.SingleOrDefault(a => a.Codigo == codigo);

            if (airplane == null) {
                throw new AirplaneNotFoundException();
            }

            this.context.Remove(airplane);
            this.context.SaveChanges();
        }

        public Airplane Find(string codigo)
        {
            var airplane = this.context.Airplanes.SingleOrDefault(a => a.Codigo == codigo);
            
            return airplane;
        }

        public List<Airplane> FindAll()
        {
            return this.context.Airplanes.ToList();
        }

        public void Update(Airplane airplane)
        {
            this.context.Entry(airplane).State = EntityState.Modified;
            this.context.SaveChanges();
        }

        public List<Airplane> Search(string query) {
            return this.context.Airplanes
            .Where(a => a.Codigo.Contains(query) || 
                a.Modelo.Contains(query))
            .ToList();
        }
    }
}