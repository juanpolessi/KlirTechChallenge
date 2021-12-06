using Klir.TechChallenge.Web.Api.Interfaces;
using Klir.TechChallenge.Web.Api.Interfaces.Repositories;
using Klir.TechChallenge.Web.Api.Repository;
using Klir.TechChallenge.Web.Api.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Klir.TechChallenge.Web.Api.Config
{
    public static class NativeInjectorBootStrapper
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddSingleton<JsonHelper>();

            #region Products

            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<IProductRepository, ProductRepository>();

            #endregion
        }
    }
}
