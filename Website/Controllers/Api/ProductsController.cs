using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Website.Data;

namespace Website.Controllers.Api
{
    [ApiController]
    [Route("/api/products")]
    public class ProductsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ProductsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET
        public IActionResult Index()
        {
            var products = _context.Products.ToList();

            return Json(new {data=products});
        }
    }
}
