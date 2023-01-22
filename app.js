const chevronDown = document.querySelector(".chevronDown");
const MobileSideBar = document.querySelector(".SideBar");
const TaskPopUp = document.querySelector(".addTaskPopUp");


window.addEventListener('click', function(e){   
    if(TaskPopUp.contains(e.target)){
        console.log("working")
    } else{
        console.log("not")
    }
})


chevronDown.addEventListener("click", function(){
MobileSideBar.classList.toggle("displayBlock");
if(MobileSideBar.classList.contains("displayBlock")){
    chevronDown.src = "assets/icon-chevron-up.svg"
} else{
    chevronDown.src = "assets/icon-chevron-down.svg"
}
})