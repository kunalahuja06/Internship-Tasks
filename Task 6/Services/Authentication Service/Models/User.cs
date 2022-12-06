using System.ComponentModel.DataAnnotations;
using System.Security.Claims;

namespace Address_Book.Authentication.Models
{
    public class User
    {
        [Key]
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public ClaimsIdentity? Role { get; internal set; }
    }
}
