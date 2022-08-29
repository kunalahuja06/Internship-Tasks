const departments=["IT", "HR","MD","Sales"];
const offices=["seattle","india"];
const jobTitles=["sharepoint practice head",".net development lead","recruting expert","BI developer", "business analyst","a","b","c","d","e"];
const alphabets=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const departmentUL=document.querySelector(".department-ul");
const officesUL = document.querySelector(".offices-ul");
const jobTitlesUL=document.querySelector(".job-title-ul");
const searchBarUL = document.querySelector(".search-alphabets-ul");

function addFilters(data,parent,element,Class){
  for(let i=0;i<data.length;i++){
    const li = document.createElement(element);
    li.className =  Class;
    parent.appendChild(li);
    const a = document.createElement("a");
    a.className = "filter-li-a text-decoration-none";
    a.href = "#";
    a.innerText=data[i];
    li.appendChild(a);
    a.addEventListener("click", filters);
    const count = document.createElement("span");
    count.className="filter-count"
    count.innerText = `(${getCount(data[i])})`;
    li.appendChild(count);
  }
}
function addSearchAlphabets(data,parent)
{
  for (let i = 0; i < data.length; i++) {
    const li = document.createElement("li");
    li.className = "search-alphabets-li list-group-item";
    parent.appendChild(li);
    const a = document.createElement("a");
    a.className = "search-alphabets-li-a text-decoration-none text-white";
    a.href = "#";
    a.innerText = data[i];
    li.appendChild(a);
    a.addEventListener("click",searchEmployeesbyAlphabets);
  }
}
addFilters(departments,departmentUL,"li","filter-li");
addFilters(offices,officesUL, "li", "filter-li");
addFilters(jobTitles,jobTitlesUL, "li", "job-titles-li d-none filter-li");
addSearchAlphabets(alphabets, searchBarUL);

function showLi(){
  let jobTitlesLi=document.querySelectorAll(".job-titles-li");
  for(let i=0;i<5;i++){
    jobTitlesLi[i].classList.remove("d-none");
  }
}
showLi()

let flag=true;
function toggleLi(){
  let jLi=document.querySelectorAll(".job-titles-li");
  let btn=document.querySelector(".view-more")
  for(let i=5;i<jLi.length;i++){
    jLi[i].classList.toggle("d-none")
  }
  if(flag){
    btn.innerText="View Less"
    flag=!flag
  }
  else{
    btn.innerText="View More"
    flag=!flag
  }
}

function validateForm(){
  let flag=true;
  let firstName=document.forms["employeeDetails"]["firstname"].value;
  const names=document.querySelector(".names")
  const alphabets=new RegExp(/^[A-Za-z ]+$/)
  if(firstName.trim()=="" || !alphabets.test(firstName)){
    const nameError=document.querySelector(".name-error")
    nameError.classList.remove("d-none")
    nameError.innerText="invalid first name!"
    console.log(nameError)
    flag=false;
  }
  let Number = document.forms["employeeDetails"]["number"].value;
  const digits=new RegExp("^[0-9]{10}$")
  if(!digits.test(Number)){
    const numberError=document.querySelector(".number-error")
    numberError.classList.remove("d-none")
    numberError.innerText="invalid phone number!"
    flag=false;
  }
  let JobTitle = document.forms["employeeDetails"]["jobtitle"].value;
  if(JobTitle.trim()=="" || !alphabets.test(JobTitle)){
    const jobTitleError=document.querySelector(".jobtitle-error")
    jobTitleError.classList.remove("d-none")
    jobTitleError.innerText="invalid Job Title!"
    flag=false;
  }
  return flag;
}

function showAllEmployees(){
  displayEmployees(JSON.parse(window.localStorage.getItem("employees")))
}

function filters(e){
  const getEmployees = JSON.parse(window.localStorage.getItem("employees"));
  const filteredEmployees=getEmployees.filter(emp=>{
    return (
      emp.department == e.target.innerText ||
      emp.jobtitle.toLowerCase() == e.target.innerText.toLowerCase() ||
      emp.office == e.target.innerText
    );
  })
  displayEmployees(filteredEmployees)
}

function searchEmployeesbyAlphabets(e){
  const getEmployees = JSON.parse(window.localStorage.getItem("employees"));
  const filteredEmployees=getEmployees.filter(emp=>{
      return emp.preferredname.startsWith(e.target.innerText)
  })
  displayEmployees(filteredEmployees)
}
function clear(){
  document.querySelector(".search-input").value="";
  displayEmployees(JSON.parse(window.localStorage.getItem("employees")));
}
function util(check) {
  if (check) {
    $("#employeeDetailsModal").modal("hide");
    alert("Employee added successfully!");
    displayEmployees(JSON.parse(window.localStorage.getItem("employees")));
    updateFilterCount()
  }
}

let filterVal = document.getElementById("filter");
let newvalue;
function onChange() {
  newvalue = filterVal.value;
}
filterVal.onchange = onChange;
onChange();

function search(){
  let input=document.getElementById("myInput").value;
  const re = new RegExp(input);
  const Employees = JSON.parse(window.localStorage.getItem("employees"));
  const filteredEmployees = Employees.filter((emp) => {
    return (
      emp[newvalue].match(re) || emp[newvalue].toLowerCase().match(re) || emp[newvalue].toUpperCase().match(re)
    );
  });
  displayEmployees(filteredEmployees);
}

function getCount(filter){
  const getEmployees = JSON.parse(window.localStorage.getItem("employees"));
  let res=0;
  getEmployees.forEach(emp=>{
    if(emp.department==filter || emp.office.toLowerCase()==filter.toLowerCase() || emp.jobtitle.toLowerCase()==filter.toLowerCase()){
      res++;
    }
  })
  return res;
}
function addHTML(){
  const prefNameField=document.querySelector(".pref-name-field")
  prefNameField.classList.remove("d-none")
  const skypeIdField=document.querySelector(".skypeid-field")
  skypeIdField.classList.remove("d-none")
  const sbmtBtn=document.querySelector("#employeeBtn")
  sbmtBtn.classList.add("edit-employee")
  sbmtBtn.innerText="Save Changes"
  const title=document.querySelector(".modal-title")
  title.innerText="Edit Employee"
  document.querySelector(".name-error").classList.add("d-none")
  document.querySelector(".number-error").classList.add("d-none")
  document.querySelector(".jobtitle-error").classList.add("d-none")
}
function removeHTML(){
  clearForm()
  const prefNameField=document.querySelector(".pref-name-field")
  prefNameField.classList.add("d-none")
  const skypeIdField=document.querySelector(".skypeid-field")
  skypeIdField.classList.add("d-none")
  const sbmtBtn=document.querySelector("#employeeBtn")
  sbmtBtn.classList.remove("edit-employee")
  sbmtBtn.innerText="Add Employee"
  const title=document.querySelector(".modal-title")
  title.innerText="Add Employee"
  document.querySelector(".name-error").classList.add("d-none")
  document.querySelector(".number-error").classList.add("d-none")
  document.querySelector(".jobtitle-error").classList.add("d-none")
}
function updateFilterCount(){
  const li=document.querySelectorAll(".filter-li")
  for(let i=0;i<li.length;i++){
    let text=li[i].innerText
    text=text.replace(/[&\/\\#,+()$~%.'":*?<>{}0-9]/g,"");
    const span=li[i].children[1]
    span.innerText=`(${getCount(text)})`
  }
}
function clearForm(){
  document.getElementById("firstName").value="";
  document.getElementById("lastName").value ="";
  document.getElementById("number").value="";
  document.getElementById("jobTitle").value="";
  document.getElementById("email").value="";
  document.getElementById("picture").value="";
}

function addFilter(filter){
  console.log(filter)
  if(!jobTitles.includes(filter)){
    jobTitles.push(filter)
    const li = document.createElement("li");
    li.className ="job-titles-li d-none filter-li";
    jobTitlesUL.appendChild(li);
    const a = document.createElement("a");
    a.className = "filter-li-a text-decoration-none";
    a.href = "#";
    a.innerText=filter;
    li.appendChild(a);
    a.addEventListener("click", filters);
    const count = document.createElement("span");
    count.className="filter-count"
    count.innerText = `(${getCount(filter)})`;
    li.appendChild(count);
    console.log(li.innerText)
  }
}
