using Address_Book.Authentication.Models;
using EmpService.Authentication_Service.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace Address_Book.Authentication
{
    public class UserController : Controller
    {
        private readonly IUserService _user;
        public UserController(IUserService user)
        {
            _user = user;
        }
        
        [HttpPost]
        [Route("users/register")]
        public IActionResult Register([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest();
            }
            else
            {
                var registerUser = _user.Register(user);
                if (registerUser)
                {
                    return Ok(new
                    {
                        StatusCode = 200,
                        Message = "User Registered Successfully"
                    });
                }
                else
                {
                    return BadRequest();
                }
            }
        }
        [HttpPost]
        [Route("users/login")]
        public IActionResult Login([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest();
            }
            else
            {
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "User Logged In Successfully"
                });
            }
        }

        [HttpGet]
        [Route("users")]
        public IActionResult Users()
        {
            var users = _user.Users();
            if (users != null)
            {
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Users Fetched Successfully",
                    Users = users
                });
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
