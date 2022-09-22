class Employee {
  constructor(id,firstname,lastname,preferredname,jobtitle,department,office,phonenumber,skypeid,picture) 
  {
    (this.id = id), (this.firstname = firstname);
    this.lastname = lastname;
    this.preferredname = preferredname;
    this.email = `${firstname}${lastname}@gmail.com`.toLowerCase();
    this.jobtitle = jobtitle;
    this.office = office;
    this.department = `${department}`;
    this.phonenumber = phonenumber;
    this.skypeid = skypeid;
    this.picture = picture;
  }
}

let employees = [
  new Employee(1,"Anthony","Moris","Anthony Moris","SharePoint Practice Head","IT","Seattle","1234567890","live:Anthony","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=90"),
  new Employee(2,"Helen","Zimmermane","Helen Zimmermane","Operations Manager","IT","Seattle","3333333333","live:Helen","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
  new Employee(3,"Jonathon","Smith","Jonathan Smith","Product Manager","IT","Seattle","7768677686","live:Jonathan","https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
  new Employee(4,"Tami","Hopkins","Tami Hopkins","Lead Engineer- Dot Net","IT","India","9696598987","live:Tami","https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
  new Employee(5,"Frankilin","Humark","Frankilin Humark","Network Engineer","IT","India","5463112345","live:Frankilin","https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"),
  new Employee(6,"Angela","Bailey","Angela Bailey","Talent Magnet Jr.","HR","Seattle","0981298651","live:Angela","https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"),
  new Employee(7,"Robert","Mitchell","Robert Mitchell","Software Engineer","IT","India","6548724680","live:Robert","https://images.unsplash.com/photo-1496360166961-10a51d5f367a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
  new Employee(8,"Olivia","Watson","Olivia Watson","UI Designer","UX","Seattle","6421612985","live:Watson","https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80"),
];

function pushEmployee(employees) {
  window.localStorage.setItem("employees", JSON.stringify(employees));
}
pushEmployee(employees);

const getEmployees = JSON.parse(window.localStorage.getItem("employees"));
displayEmployees(getEmployees);

function getEmployeeById(id){
  const Employees=JSON.parse(window.localStorage.getItem("employees"));
  for(let i=0;i<Employees.length;i++){
    if(Employees[i].id==id){
      return Employees[i]
    }
  }
}

function displayEmployees(employees) {
  const generatedHtml = Object.keys(employees).reduce(
    (target,currKey) =>
      target +
      `
      <div class="employee d-flex mb-3 col-3" id="employee" data-bs-toggle="modal" data-bs-target="#showEmployee" onclick="displayEmployee(${employees[currKey].id})">
        <div>
            <img src="${employees[currKey].picture}" class="picture p-2">
        </div>
        <div class="p-2 pe-4">
            <h5 class="employee-name text-nowrap m-0"><a href="#" class=" employee-name-a text-decoration-none">${employees[currKey].preferredname}</a></h5>
            <p class="job-title text-nowrap m-0 text-capitalize">${employees[currKey].jobtitle}</p>
            <p class="department text-nowrap m-0">${employees[currKey].department} Department</p>
            <span class="d-flex">
                <a href="#" class="contact-icon me-2"><i class="fa-solid fa-square-phone"></i></a>
                <a href="#" class="contact-icon me-2"><i class="fa-solid fa-envelope"></i></a>
                <a href="#" class="contact-icon me-2"><i class="fa-solid fa-comment"></i></a>
                <a href="#" class="contact-icon me-2"><i class="fa-solid fa-star"></i></a>
                <a href="#" class="contact-icon me-2"><i class="fa-solid fa-heart"></i></a>
            </span>
        </div>
    </div>
        `,
    ""
  );
  document.querySelector(".employees").innerHTML = generatedHtml;
}

const PrefName = document.getElementById("preferredName");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
function setPreferredName(){
  PrefName.value=firstName.value+" "+lastName.value
}


function addEmployee(formdata){
  let checkValidity=validateForm()
  if(checkValidity){
    const Employees = JSON.parse(window.localStorage.getItem("employees"));
    const NewEmployee = new Employee(
    Employees.length+1,
    formdata.get("firstName"),formdata.get("lastName"),formdata.get("preferredName"),formdata.get("jobTitle"),formdata.get("department"),formdata.get("office"),formdata.get("phoneNumber"),formdata.get("skypeId"),formdata.get("picture"));
    Employees.push(NewEmployee);
    pushEmployee(Employees);
    helper(true,'add');
  }
};


function displayEmployee(id){
  const Employee=getEmployeeById(id)
  document.querySelector(".edit-btn").setAttribute("data-id",id)
  document.querySelector("#employeeBtn").setAttribute("data-id",id)
  document.querySelector(".show-employee-modal-picture").src=Employee.picture;
  document.querySelector(".show-employee-modal-preferredname").innerText=Employee.preferredname;
  document.querySelector(".show-employee-modal-first-name").innerText=Employee.firstname;
  document.querySelector(".show-employee-modal-last-name").innerText=Employee.lastname;
  document.querySelector(".show-employee-modal-email").innerText=Employee.email;
  document.querySelector(".show-employee-modal-phone-number").innerText=Employee.phonenumber;
  document.querySelector(".show-employee-modal-skypeid").innerText=Employee.skypeid;
  document.querySelector(".show-employee-modal-jobtitle").innerText=Employee.jobtitle;
  document.querySelector(".show-employee-modal-department").innerText=Employee.department;
  document.querySelector(".show-employee-modal-office").innerText=Employee.office;
}

function showEmployeeValues(e){
  document.querySelector(".modal-title").innerText="edit employee"
  addErrorClass()
  const id=document.querySelector(".edit-btn").getAttribute("data-id");
  const Employee=getEmployeeById(id)
  document.getElementById("firstName").value=Employee.firstname;
  document.getElementById("lastName").value = Employee.lastname;
  document.getElementById("number").value = Employee.phonenumber;
  document.getElementById("email").value = Employee.email;
  document.getElementById("picture").value = Employee.picture;
  document.getElementById("preferredName").value=Employee.preferredname;
  document.getElementById("skypeId").value=Employee.skypeid;
} 

function setEmployee(formdata,id){
  let validity=validateForm()
  if(validity){
  let Employees = JSON.parse(window.localStorage.getItem("employees"));
  Employees.forEach(employee => {
	    if(employee.id==id){
	      for(const [k,v] of formdata){
          if(employee[k.toLowerCase()]!=v){
            employee[k.toLowerCase()]=v;
          }
        }
	    }
  });
  pushEmployee(Employees)
  helper(true,'edit')
  }
}

function saveEmployee(){
  const form=document.getElementById("employeeDetails")
  form.onsubmit = (e) => {
     e.preventDefault();
  }
  const formdata=new FormData(form)
  const btn=document.querySelector("#employeeBtn")
  if(btn.getAttribute("data-id")){
    setEmployee(formdata,btn.getAttribute("data-id"))
  }
  else{
    addEmployee(formdata)
  }
}

