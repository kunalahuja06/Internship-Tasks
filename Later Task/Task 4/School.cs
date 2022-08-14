using System;

class School
{
    public  List<Student> Students;
    public string SchoolName;
    public School(string SchoolName)
    {
        this.SchoolName = SchoolName;
        Students = new List<Student>();
    }
    public void AddStudent()
    {
        Console.WriteLine("Enter Student Roll Number");
        int RollNo = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Enter Student Name");
        string StudentName = Console.ReadLine();
        Student student = new(RollNo, StudentName, SchoolName);
        Students.Add(student);
    }
    public int GetStudent(int RollNo)
    {
        int Index = -1;
        for (int i = 0; i <Students.Count; i++)
        {
            if (Students[i].RollNo == RollNo)
            {
                Index = i;
                break;
            }
        }
        return Index;
    }
}
