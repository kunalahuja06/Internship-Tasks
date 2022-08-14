class Student
{
    public int RollNo;
    public string Name;
    public string SchoolName;
    public Dictionary<string, float> Subjects;
    public Student(int RollNo, string StudentName, string SchoolName)
    {
        this.RollNo = RollNo;
        Name = StudentName;
        this.SchoolName = SchoolName;
        Console.WriteLine("Student details are added successfully");
        Subjects = new Dictionary<string, float>()
            {
                {"Telgu",0 },
                {"Hindi",0 },
                {"English",0 },
                {"Maths",0 },
                {"Science",0 },
                {"Social",0 }
            };
    }
    public static void AddMarks(School school)
    {
        Console.WriteLine("Enter Student Roll Number :");
        int RollNo = Convert.ToInt32(Console.ReadLine());
        int Index = school.GetStudent(RollNo);
        if (Index == -1)
        {
            Console.WriteLine("Student not found");
        }
        Student student = school.Students[Index];
        foreach (KeyValuePair<string, float> kvp in student.Subjects)
        {
            Console.WriteLine("Enter Marks Scored in {0}", kvp.Key);
            int Marks = Convert.ToInt32(Console.ReadLine());
            student.Subjects[kvp.Key] = Marks;
        }
    }
    public static void ShowProgressCard(School school)
    {
        Console.WriteLine("Enter Student Roll Number :");
        int RollNo = Convert.ToInt32(Console.ReadLine());
        int Index = school.GetStudent(RollNo);
        if (Index == -1)
        {
            Console.WriteLine("Student not found");
        }
        Student student = school.Students[Index];
        Console.WriteLine("Student Roll number :" + student.RollNo);
        Console.WriteLine("Student Roll number :" + student.Name);
        Console.WriteLine("Student Marks");
        Console.WriteLine("---------------");
        foreach (KeyValuePair<string, float> kvp in student.Subjects)
        {
            Console.WriteLine(kvp.Key + " : " + kvp.Value);

        }
        Console.WriteLine("---------------");
        Console.WriteLine();
        float ScoredMarks = 0;
        float TotalMarks = student.Subjects.Count * 100;
        foreach (KeyValuePair<string, float> kvp in student.Subjects)
        {
            ScoredMarks += kvp.Value;
        }
        Console.WriteLine("Total Marks : " + ScoredMarks);
        Console.WriteLine("Percentage : " + (ScoredMarks / TotalMarks) * 100);
        Console.WriteLine("---------------");
    }
}
