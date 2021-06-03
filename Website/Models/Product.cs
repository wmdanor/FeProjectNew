using System.ComponentModel.DataAnnotations;

namespace Website.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public int Price { get; set; }

        [Required]
        public string ImageUrl { get; set; }
    }
}
