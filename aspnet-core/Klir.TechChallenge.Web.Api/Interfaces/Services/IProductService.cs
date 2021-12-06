using Klir.TechChallenge.Web.Api.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Klir.TechChallenge.Web.Api.Interfaces
{
    public interface IProductService
    {
        List<ProductViewModel> GetProducts();
    }
}
