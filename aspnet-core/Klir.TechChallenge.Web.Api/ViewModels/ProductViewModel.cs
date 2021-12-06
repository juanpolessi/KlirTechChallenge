using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Klir.TechChallenge.Web.Api.ViewModels
{
    public class ProductViewModel
    {
        public long Id { get; set; }

        public string Name { get; set; }

        public double Price { get; set; }

        public string Promotion { get; set; }

        public int PromotionId { get; set; }
    }
}
