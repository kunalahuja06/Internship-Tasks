using Address_Book.Authentication.Models;

namespace EmpService.Authentication_Service.Contracts
{
    public interface IUserService
    {
        bool Register(User user);

        List<User> Users();
    }
}
