const github = document.getElementById('github')

function githubAcess(){
    window.location.href = 'https://github.com/MthsLnk-gthb'
}

github.addEventListener('click', githubAcess)



var projectsDrop = document.getElementById("projects")
var projectsDropCont = document.getElementById("projectsDropContent")

projectsDrop.addEventListener("click", ()=>{
  projectsDropCont.style.display =
    projectsDropCont.style.display === "block" ? "none" : "block";
});

projectsDrop.addEventListener("clickout", () => {
  projectsDropCont.style.display = "none";
});



var contactsDrop = document.getElementById("contact")
var contactsDropContent = document.getElementById("contactDropContent")

contactsDrop.addEventListener("click", ()=>{
     contactsDropContent.style.display =
       contactsDropContent.style.display === "block" ? "none" : "block";
});

contactsDrop.addEventListener("clickout", ()=>{
  contactsDropContent.style.display = "none";
});
