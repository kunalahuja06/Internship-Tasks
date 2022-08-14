namespace Program
{

    class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Enter School name:");
            string SchoolName = Console.ReadLine();
            Console.Clear();
            School school = new School(SchoolName);
            Console.WriteLine($"Welcome to {school.SchoolName} student information management");
            Console.WriteLine("----------------------------------------------------------------------");
            Options(school);
            
        }
        public static void Options(School school)
        {
            bool isTrue = true;
            do
            {
                Console.WriteLine();
                Console.WriteLine("1. Add student");
                Console.WriteLine("2. Add marks for student");
                Console.WriteLine("3. Show student progress card");
                Console.WriteLine();
                Console.WriteLine("Please provide valid input from menu options :");
                try
                {
                    int Option = Convert.ToInt32(Console.ReadLine());
                    switch (Option)
                    {
                        case 1:
                            school.AddStudent();
                            break;
                        case 2:
                            Student.AddMarks(school);
                            break;
                        case 3:
                            Student.ShowProgressCard(school);
                            break;
                        default:
                            Console.WriteLine("Invalid input");
                            break;
                    }
                }catch(Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            } while (isTrue) ;
        }
    }
}
