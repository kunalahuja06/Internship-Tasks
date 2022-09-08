const departments=["IT", "HR","MD","Sales"];
const offices=["seattle","india"];
const jobTitles=["sharepoint practice head",".net development lead","recruiting expert","BI developer", "business analyst","a","b","c","d","e"];

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
  for(let i =97; i <=122; i++) {
    const li = document.createElement("li");
    li.className = "search-alphabets-li list-group-item";
    parent.appendChild(li);
    const a = document.createElement("a");
    a.className = "search-alphabets-li-a text-decoration-none text-white";
    a.href = "#";
    a.innerText =String.fromCodePoint(i)
    li.appendChild(a);
    a.addEventListener("click",searchEmployeesbyAlphabets);
  }
}
addFilters(departments,departmentUL,"li","filter-li");
addFilters(offices,officesUL, "li", "filter-li");
addFilters(jobTitles,jobTitlesUL, "li", "job-titles-li d-none filter-li");
addSearchAlphabets('', searchBarUL);
document.querySelectorAll(".search-alphabets-li")[0].addEventListener('click',()=>displayEmployees(JSON.parse(window.localStorage.getItem("employees"))))

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
  let prefName=document.forms["employeeDetails"]["preferredName"].value;
  const prefNameregex=/^[A-Za-z0-9 ]+$/
  if(prefName.trim()=="" || !prefNameregex.test(prefName)){
    const prefNameError=document.querySelector(".preferred-name-error")
    prefNameError.classList.remove("d-none")
    prefNameError.innerText="invalid preferred name!"
    flag=false;
  }
  let firstName=document.forms["employeeDetails"]["firstName"].value;
  const firstNameRegex=/^[A-Za-z]+$/
  if(firstName.trim()=="" || !firstNameRegex.test(firstName)){
    const nameError=document.querySelector(".name-error")
    nameError.classList.remove("d-none")
    nameError.innerText="invalid first name!"
    console.log(nameError)
    flag=false;
  }
  let number = document.forms["employeeDetails"]["number"].value;
  const digits=/^[0-9]{10}$/
  if(!digits.test(number)){
    const numberError=document.querySelector(".number-error")
    numberError.classList.remove("d-none")
    numberError.innerText="invalid phone number!"
    flag=false;
  }
  let skypeId = document.forms["employeeDetails"]["skypeId"].value;
  const skypeIdRegex=/^[l]+[i]+[v]+[e]+[:]+[a-zA-z0-9]/
  if(!skypeIdRegex.test(skypeId)){
    const skypeIdError=document.querySelector(".skypeid-error")
    skypeIdError.classList.remove("d-none")
    skypeIdError.innerText="invalid skypeid, should start with live:!"
    flag=false;
  }
  let email = document.forms["employeeDetails"]["email"].value;
  const emailRegerex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if(!emailRegerex.test(email)){
    const emailError=document.querySelector(".email-error")
    emailError.classList.remove("d-none")
    emailError.innerText="invalid email!"
    flag=false;
  }
  return flag;
}

function clearForm(){
  const fields=document.querySelectorAll(".form-control")
  fields.forEach(field=>field.value="")
}

function filters(e){
  const employees = JSON.parse(window.localStorage.getItem("employees"));
  const filteredEmployees=employees.filter(emp=>{
    return (
      emp.department == e.target.innerText ||emp.jobtitle.toLowerCase() == e.target.innerText.toLowerCase() ||emp.office == e.target.innerText
    );
  })
  displayEmployees(filteredEmployees)
}

function searchEmployeesbyAlphabets(e){
  const employees = JSON.parse(window.localStorage.getItem("employees"));
  const filteredEmployees=employees.filter(emp=>{
      return emp.preferredname.startsWith(e.target.innerText)
  })
  displayEmployees(filteredEmployees)
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
  const employees = JSON.parse(window.localStorage.getItem("employees"));
  const filteredEmployees = employees.filter((emp) => {
    return (
      emp[newvalue].match(re) || emp[newvalue].toLowerCase().match(re) || emp[newvalue].toUpperCase().match(re)
    );
  });
  displayEmployees(filteredEmployees);
}

function getCount(filter){
  const employees = JSON.parse(window.localStorage.getItem("employees"));
  let res=0;
  employees.forEach(emp=>{
    if(emp.department==filter || emp.office.toLowerCase()==filter.toLowerCase() || emp.jobtitle.toLowerCase()==filter.toLowerCase()){
      res++;
    }
  })
  return res;
}

function updateFilterCount(){
  const li=document.querySelectorAll(".filter-li")
  for(let i=0;i<li.length;i++){
    let text=li[i].innerText
    text=text.replace(/[&\/\\#,+()$~%'":*?<>{}0-9]/g,"");
    const span=li[i].children[1]
    span.innerText=`(${getCount(text)})`
  }
}

function addErrorClass()
{
  document.querySelector(".name-error").classList.add("d-none")
  document.querySelector(".number-error").classList.add("d-none")
  document.querySelector(".jobtitle-error").classList.add("d-none")
  document.querySelector(".email-error").classList.add("d-none")
  document.querySelector(".preferred-name-error").classList.add("d-none")
  document.querySelector(".skypeid-error").classList.add("d-none")
}

function addEmployeeBtn(){
  clearForm()
  document.querySelector(".modal-title").innerText="add employee"
  document.querySelector("#employeeBtn").setAttribute("data-id","")
  addErrorClass()
}

function helper(check,type) {
  $("#employeeDetailsModal").modal("hide");
  if(type=='add'){
    if (check) {
      alert("Employee added successfully!");
    }
  }
  if(type=='edit'){
    if(check){
      alert("Employee modified successfully!");
    }
  }
  displayEmployees(JSON.parse(window.localStorage.getItem("employees")));
  updateFilterCount()
}

function clearSearchInput(){
  document.querySelector(".search-input").value="";
  displayEmployees(JSON.parse(window.localStorage.getItem("employees")));
}
