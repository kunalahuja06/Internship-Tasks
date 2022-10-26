using System.ComponentModel.DataAnnotations;

namespace Address_Book.Models
{
    public class employeeModel
    {
        [Key]
        public int ID { get; set; }
        public string prefName { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string phoneNumber { get; set; }
        public string skypeID { get; set; }
        public string jobTitle { get; set; }
        public string department { get; set; }
        public string office { get; set; }
    }
}
