using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AirPlane.Back.Application.Services;
using AirPlane.Back.Core.Repositories;
using AirPlane.Back.Infrastructure.Persistence;
using AirPlane.Back.Infrastructure.Persistence.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace AirPlane.Back.Api
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AirplaneContext>(options => options.UseInMemoryDatabase("AirplaneDb"));
            
            services.AddScoped<IAirplaneRepository, AirplaneRepository>();
            services.AddScoped<IAirplaneService, AirplaneService>();

            services.AddCors();

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(
                options => options.AllowAnyOrigin()
                                .AllowAnyHeader()
                                .AllowAnyMethod()
            );

            app.UseMvc();
        }
    }
}
