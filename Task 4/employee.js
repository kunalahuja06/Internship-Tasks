class Employee {
  constructor(id,firstname,lastname,preferredname,jobtitle,department,office,phonenumber,skypeid,picture) 
  {this.id=id,this.firstname = firstname;this.lastname = lastname;this.preferredname = preferredname;this.email = `${firstname}${lastname}@gmail.com`.toLowerCase();this.jobtitle = jobtitle;this.office = office;this.department = `${department}`;this.phonenumber = phonenumber;this.skypeid = skypeid;this.picture = picture;}
}

let employees = [
  new Employee(1,"Anthony","Moris","Anthony Moris","SharePoint Practice Head","IT","Seattle","12345","live:Anthony","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=90"),
  new Employee(2,"Helen","Zimmermane","Helen Zimmermane","Operations Manager","IT","Seattle","33333","live:Helen","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
  new Employee(3,"Jonathon","Smith","Jonathan Smith","Product Manager","IT","Seattle","77686","live:Jonathan","https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
  new Employee(4,"Tami","Hopkins","Tami Hopkins","Lead Engineer- Dot Net","IT","India","96965","live:Tami","https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
  new Employee(5,"Frankilin","Humark","Frankilin Humark","Network Engineer","IT","India","54631","live:Frankilin","https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"),
  new Employee(6,"Angela","Bailey","Angela Bailey","Talent Magnet Jr.","HR","Seattle","09812","live:Angela","https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"),
  new Employee(7,"Robert","Mitchell","Robert Mitchell","Software Engineer","IT","India","65487","live:Robert","https://images.unsplash.com/photo-1496360166961-10a51d5f367a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
  new Employee(8,"Olivia","Watson","Olivia Watson","UI Designer","UX","Seattle","64216","live:Watson","https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80"),
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

function addEmployee(){
  const form=document.querySelector("#employeeDetails");
  form.onsubmit = (e) => {
    e.preventDefault();
    let checkValidity=validateForm()
    if(checkValidity){
      const Employees = JSON.parse(window.localStorage.getItem("employees"));
      const NewEmployee = new Employee(
      Employees.length+1,
      $("input[id=firstName]").val(),$("input[id=lastName]").val(),$("input[id=preferredName").val(),$("input[id=jobTitle]").val(),$("select[id=department]").val(),$("select[id=office]").val(),$("input[id=number]").val(),$("input[id=skypeId]").val(),$("input[id=picture]").val());
      saveNewEmployee(Employees,NewEmployee)
    }
  };
}

function saveNewEmployee(Employees,NewEmployee) {
  Employees.push(NewEmployee);
  pushEmployee(Employees);
  helper(true,'add');
}

function displayEmployee(id){
  const Employee=getEmployeeById(id)
  document.querySelector(".edit-btn").setAttribute("data-bs-id",id)
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

function showEmployeeValues(){
  const sbmtBtn=document.querySelector("#employeeBtn")
  sbmtBtn.classList.add("edit-employee")
  addErrorClass()
  const id=document.querySelector(".edit-btn").getAttribute("data-bs-id");
  const Employee=getEmployeeById(id)
  document.getElementById("firstName").value=Employee.firstname;
  document.getElementById("lastName").value = Employee.lastname;
  document.getElementById("number").value = Employee.phonenumber;
  document.getElementById("jobTitle").value = Employee.jobtitle;
  document.getElementById("email").value = Employee.email;
  document.getElementById("picture").value = Employee.picture;
  document.getElementById("preferredName").value=Employee.preferredname;
  document.getElementById("skypeId").value=Employee.skypeid;
} 

function setEmployee(){
  const form=document.getElementById("employeeDetails")
  form.onsubmit = (e) => {
     e.preventDefault();
  }
  let validity=validateForm()
  if(validity){
  let formdata=new FormData(form)
  let Employees = JSON.parse(window.localStorage.getItem("employees"));
  const id=document.querySelector(".edit-btn").getAttribute("data-bs-id");
  Employees.forEach(employee => {
	    if(employee.id==id){
	      for([k,v] of formdata){
          if(employee[k.toLowerCase()]!=v){
          employee[k]=v;
          }
        }
	    }
  });
  saveEditEmployee(Employees,formdata)
  }
}
function saveEditEmployee(Employees,formdata){
  pushEmployee(Employees)
  addFilter(formdata.get('jobtitle'))
  helper(true,'edit')
}

function employeeFn(){
  const btn=document.querySelector("#employeeBtn")
  if(!btn.classList.contains("edit-employee")){
    addEmployee()
  }
  else{
    setEmployee()
  }
}
