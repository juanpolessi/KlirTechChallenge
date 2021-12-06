using Klir.TechChallenge.Web.Api.DTOs;
using Klir.TechChallenge.Web.Api.Repository;
using Klir.TechChallenge.Web.Api.Interfaces;
using Klir.TechChallenge.Web.Api.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Klir.TechChallenge.Web.Api.Interfaces.Repositories;

namespace Klir.TechChallenge.Web.Api.Services
{
    public class ProductService : IProductService
    {
        private readonly IMapper _mapper;
        private readonly IProductRepository _productRepository;

        public ProductService(IMapper mapper, IProductRepository productRepository)
        {
            _mapper = mapper;
            _productRepository = productRepository;
        }

        public List<ProductViewModel> GetProducts()
        {
            var products = _productRepository.Get();

            return products == null ? new List<ProductViewModel>() : _mapper.Map<IEnumerable<ProductDTO>, List<ProductViewModel>>(products);
        }
    }
}
