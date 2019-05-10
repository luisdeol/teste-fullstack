using Microsoft.EntityFrameworkCore;
using AirPlane.Back.Core.Entities;

namespace AirPlane.Back.Infrastructure.Persistence
{
    public class AirplaneContext : DbContext
    {
        public AirplaneContext(DbContextOptions<AirplaneContext> options): base(options)
        {
            
        }
        public DbSet<Airplane> Airplanes { get; set; }

        protected override void OnModelCreating(ModelBuilder builder) {
            builder.Entity<Airplane>().HasKey(a => a.Codigo);
        }
    }
}