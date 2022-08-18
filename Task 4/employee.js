class Employee {
  constructor(
    firstname,
    lastname,
    jobtitle,
    department,
    office,
    phonenumber,
    picture
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.preferredname = `${firstname} ${lastname}`;
    this.email = `${firstname}${lastname}@gmail.com`;
    this.jobtitle = jobtitle;
    this.office = office;
    this.department = `${department}`;
    this.phonenumber = phonenumber;
    this.skypeid = `live:${firstname}`;
    this.picture = picture;
  }
}


let employees = [
  new Employee(
    "Anthony",
    "Moris",
    "SharePoint Practice Head",
    "IT",
    "Seattle",
    "12345",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  ),
  new Employee(
    "Helen",
    "Zimmermane",
    "Operations Manager",
    "IT",
    "Seattle",
    "33333",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  ),
  new Employee(
    "Jonathon",
    "Smith",
    "Product Manager",
    "IT",
    "Seattle",
    "77686",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  ),
  new Employee(
    "Tami",
    "Hopkins",
    "Lead Engineer- Dot Net",
    "IT",
    "India",
    "96965",
    "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  ),
  new Employee(
    "Frankilin",
    "Humark",
    "Network Engineer",
    "IT",
    "India",
    "54631",
    "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  ),
  new Employee(
    "Angela",
    "Bailey",
    "Talent Magnet Jr.",
    "HR",
    "Seattle",
    "09812",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
  ),
  new Employee(
    "Robert",
    "Mitchell",
    "Software Engineer",
    "IT",
    "India",
    "65487",
    "https://images.unsplash.com/photo-1496360166961-10a51d5f367a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  ),
  new Employee(
    "Olivia",
    "Watson",
    "UI Designer",
    "UX",
    "Seattle",
    "64216",
    "https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80"
  ),
];

function putEmployee(employees) {
  window.localStorage.setItem("employees", JSON.stringify(employees));
}
const getEmployees = JSON.parse(window.localStorage.getItem("employees"));

putEmployee(employees);
DisplayEmployees(getEmployees);

function DisplayEmployees(employees) {
  const generatedHtml = Object.keys(employees).reduce(
    (accum, currKey) =>
      accum +
      `
      <div class="employee d-flex mb-3" id="employee">
        <div>
            <img src="${employees[currKey].picture}" class="picture p-2">
        </div>
        <div class="p-2 pe-4">
            <h5 class="employee-name text-nowrap m-0"><a href="#" class=" employee-name-a text-decoration-none" data-bs-toggle="modal" data-bs-target="#exampleModal">${employees[currKey].preferredname}</a></h5>
            <p class="job-title text-nowrap m-0">${employees[currKey].jobtitle}</p>
            <p class="department text-nowrap m-0">${employees[currKey].department} Department</p>
            <span class="d-flex">
                <a href="#" class=" contact-icon me-2"><i class="fa-solid fa-square-phone"></i></a>
                <a href="#" class=" contact-icon me-2"><i class="fa-solid fa-envelope"></i></a>
                <a href="#" class=" contact-icon me-2"><i class="fa-solid fa-comment"></i></a>
                <a href="#" class=" contact-icon me-2"><i class="fa-solid fa-star"></i></a>
                <a href="#" class=" contact-icon me-2"><i class="fa-solid fa-heart"></i></a>
            </span>
        </div>
    </div>
        `,
    ""
  );
  document.querySelector(".employees").innerHTML = generatedHtml;
}
let check = false;
function SetEmployee() {
  const NewEmployee = new Employee(
    $("input[id=FirstName]").val(),
    $("input[id=LastName]").val(),
    $("input[id=AddJobTitle]").val(),
    $("select[id=AddDepartment]").val(),
    $("select[id=AddOffice]").val(),
    $("input[id=AddNumber]").val(),
    $("input[id=AddImage]").val()
  );
  const getEmployees = JSON.parse(window.localStorage.getItem("employees"));
  getEmployees.push(NewEmployee);
  putEmployee(getEmployees);
  check = true;
  ShowAlert(check);
}
function ShowAlert(check) {
  if (check) {
    // document.querySelector(".submitButton").className="d-none";
    alert("Employee added successfully!");
    DisplayEmployees(JSON.parse(window.localStorage.getItem("employees")));
  }
}