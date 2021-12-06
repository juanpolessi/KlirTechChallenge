using AutoMapper;
using Klir.TechChallenge.Web.Api.Mappings;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Klir.TechChallenge.Web.Api.Config
{
    public static class Mapper
    {
        public static IServiceCollection AddMapper(this IServiceCollection services)
        {
            var sp = services.BuildServiceProvider();

            var config = new MapperConfiguration(c =>
            {
                c.AddProfile(new DTOToViewModel());
            });

            return services.AddSingleton(config.CreateMapper());
        }
    }
}
