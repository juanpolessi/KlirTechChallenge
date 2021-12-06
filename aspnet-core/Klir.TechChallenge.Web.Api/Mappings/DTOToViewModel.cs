using AutoMapper;
using Klir.TechChallenge.Web.Api.DTOs;
using Klir.TechChallenge.Web.Api.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Klir.TechChallenge.Web.Api.Mappings
{
    public class DTOToViewModel: Profile
    {
        public DTOToViewModel()
        {
            CreateMap<ProductDTO, ProductViewModel>();
        }
        
    }
}
