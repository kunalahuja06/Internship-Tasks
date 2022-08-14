const Departments=["IT", "Human Resources","MD","Sales"];
const Offices=["seattle","india"];
const JobTitles=["sharepoint practice head",".net development lead","recruting expert","BI developer", "business analyst"];

const DepartmentUL=document.querySelector(".department-ul");
const OfficesUL = document.querySelector(".offices-ul");
const JobTitlesUL=document.querySelector(".job-title-ul")

for(let i=0;i<Departments.length;i++){
    const li=document.createElement("li");
    li.innerText=Departments[i];
    DepartmentUL.appendChild(li);
}
for (let i = 0; i <Offices.length; i++) {
  const li = document.createElement("li");
  li.innerText = Offices[i];
  OfficesUL.appendChild(li);
}
for (let i = 0; i < JobTitles.length; i++) {
  const li = document.createElement("li");
  li.innerText = JobTitles[i];
  JobTitlesUL.appendChild(li);
}

const Alphabets=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const SearchBar=document.querySelector(".search-bar");

for(let i=0;i<Alphabets.length;i++){
    const p=document.createElement("p");
    p.innerText=Alphabets[i];
    SearchBar.appendChild(p);
}