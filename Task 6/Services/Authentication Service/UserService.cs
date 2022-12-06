using Address_Book.Authentication.Models;
using EmpService.Authentication_Service.Contracts;
using EmpService.Authentication_Service.Data;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata.Ecma335;

namespace EmpService.Authentication_Service
{
    public class UserService : IUserService
    {
        private readonly UserDbContext _context;
        public UserService(UserDbContext context)
        {
            _context = context;
        }
        public bool Register(User user)
        {
            try
            {
                _context.Users.Add(user);
                _context.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                throw;
            }
        }

        public List<User> Users()
        {
            var users = _context.Users.ToList();
            return users;
        }
    }
}
