using Klir.TechChallenge.Web.Api.DTOs;
using Klir.TechChallenge.Web.Api.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Klir.TechChallenge.Web.Api.Repository
{
    public enum PromotionId
    {
        NoPromotion = 0,
        BuyOneGetOneFree = 1,
        ThreeforTenEuro = 2,
    }

    public class ProductRepository : IProductRepository
    {
        /// <summary>
        /// This is a fake Repository for return products, in real Repository, the search is in database
        /// </summary>
        /// <returns></returns>
        public IEnumerable<ProductDTO> Get()
        {
            var product1 = new ProductDTO()
            {
                Id = 1,
                Name = "Product A",
                Price = 20,
                Promotion = "Buy 1 Get 1 Free",
                PromotionId = (int)PromotionId.BuyOneGetOneFree
            };

            var product2 = new ProductDTO()
            {
                Id = 2,
                Name = "Product B",
                Price = 4,
                Promotion = "3 for 10 Euro",
                PromotionId = (int)PromotionId.ThreeforTenEuro
            };

            var product3 = new ProductDTO()
            {
                Id = 1,
                Name = "Product C",
                Price = 2,
                Promotion = "",
                PromotionId = (int)PromotionId.NoPromotion
            };

            var product4 = new ProductDTO()
            {
                Id = 1,
                Name = "Product D",
                Price = 4,
                Promotion = "3 for 10 Euro",
                PromotionId = (int)PromotionId.ThreeforTenEuro
            };

            var listProducts = new List<ProductDTO>();
            listProducts.Add(product1);
            listProducts.Add(product2);
            listProducts.Add(product3);
            listProducts.Add(product4);

            return listProducts;
        }
    }
}
