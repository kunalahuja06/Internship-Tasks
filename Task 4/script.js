const Departments=["IT", "HR","MD","Sales"];
const Offices=["seattle","india"];
const JobTitles=["sharepoint practice head",".net development lead","recruting expert","BI developer", "business analyst"];
const Alphabets=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const DepartmentUL=document.querySelector(".department-ul");
const OfficesUL = document.querySelector(".offices-ul");
const JobTitlesUL=document.querySelector(".job-title-ul");
const SearchBarUL = document.querySelector(".search-alphabets-ul");

function addFilters(data,parent,element,Class){
  for(let i=0;i<data.length;i++){
    const createElement = document.createElement(element);
    createElement.className = Class;
    parent.appendChild(createElement);
    const a = document.createElement("a");
    a.className = `${Class}-a text-decoration-none`;
    a.href = "#";
    a.innerText = data[i];
    createElement.appendChild(a);
    a.addEventListener("click", Filters);
  }
}
function addSearchAlphabets(data,parent)
{
     for (let i = 0; i < data.length; i++) {
       const createElement = document.createElement("li");
       createElement.className = "search-alphabets-li list-group-item";
       parent.appendChild(createElement);
       const a = document.createElement("a");
       a.className = "search-alphabets-li-a  text-decoration-none text-white";
       a.href = "#";
       a.innerText = data[i];
       createElement.appendChild(a);
       a.addEventListener("click",SearchEmployees);
     }
}
addFilters(Departments,DepartmentUL,"li","filter-li");
addFilters(Offices,OfficesUL, "li", "filter-li");
addFilters(JobTitles,JobTitlesUL, "li", "filter-li");
addSearchAlphabets(Alphabets, SearchBarUL);

function validateForm(){
  let firstName=document.forms["addEmployee"]["FirstName"].value;
  let lastName = document.forms["addEmployee"]["LastName"].value;
  let Number = document.forms["addEmployee"]["Number"].value;
  let JobTitle = document.forms["addEmployee"]["JobTitle"].value;
  if(firstName.trim()=="" || lastName.trim()=="" || JobTitle.trim()=="" || Number.trim()=="" || Number.length>10 || Number.length<10){
    alert("One or more fields has invalid input, please try again");
    return false;
  }
  return true;
}
const form=document.querySelector("#addEmployee");
form.onsubmit = (e) => {
  e.preventDefault();
  let checkValidity=validateForm()
  if(checkValidity){
    SetEmployee()
  }
};
function ShowAllEmployees(){
  DisplayEmployees(JSON.parse(window.localStorage.getItem("employees")))
}
function Filters(e){
  const getEmployees = JSON.parse(window.localStorage.getItem("employees"));
  const filteredEmployees=getEmployees.filter(emp=>{
    return (
      emp.department == e.target.innerText ||
      emp.jobtitle == e.target.innerText ||
      emp.office == e.target.innerText
    );
  })
  DisplayEmployees(filteredEmployees)
}

function SearchEmployees(e){
  const getEmployees = JSON.parse(window.localStorage.getItem("employees"));
  const filteredEmployees=getEmployees.filter(emp=>{
      return emp.preferredname.startsWith(e.target.innerText)
  })
  DisplayEmployees(filteredEmployees)
}
function Clear(){
  document.querySelector(".search-input").value="";
}
