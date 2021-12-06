using Klir.TechChallenge.Web.Api.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Klir.TechChallenge.Web.Api.Interfaces.Repositories
{
    public interface IProductRepository
    {
        IEnumerable<ProductDTO> Get();
    }
}
