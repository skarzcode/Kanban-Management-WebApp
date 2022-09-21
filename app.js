const chevronDown = document.querySelector(".chevronDown");
const MobileSideBar = document.querySelector(".SideBar");

chevronDown.addEventListener("click", function(){
MobileSideBar.classList.toggle("displayBlock");
if(MobileSideBar.classList.contains("displayBlock")){
    chevronDown.src = "assets/icon-chevron-up.svg"
} else{
    chevronDown.src = "assets/icon-chevron-down.svg"
}
})