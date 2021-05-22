// document.querySelector('body')
// .addEventListener('mousemove',eyeball);
// function eyeball(){
// var eye = document.querySelectorAll('.pupil');
// eye.forEach((eye)=>{

// let x = (eye.getBoundingClientRect().left)+(eye.clientWidth/2);
// let y = (eye.getBoundingClientRect().top)+(eye.clientHeight/2);
// let radian = Math.atan2(event.pageX-x,event.pageY-y);
// let rot = (((radian *(180/Math.PI)*-1)+270));
// eye.style.transform = `rotate(${rot}deg)`;
// })
// }

const buddha_svg = document.getElementById('buddha_svg');
const toggleBtn = document.getElementById('toggle-btn');

buddha_svg.classList.replace('buddha_svg_top', 'buddha_svg_top_Active');

function skill(getid) {
    const unactive = document.querySelectorAll(".page-link");
    for (var i = 0; i < unactive.length; ++i) {
        unactive[i].classList.remove('link_bottom_active');
    }
    const active = document.getElementById(getid);
    document.title = `Portfolio - ${getid}`;
    buddha_svg.classList.replace('buddha_svg_top_Active', 'buddha_svg_top_skill');
    active.classList.add('link_bottom_active');
    let profile_input = document.getElementById('profile_input');
    let skill_input = document.getElementById('skill_input');
    let contact_input = document.getElementById('contact_input');
    let projects_input = document.getElementById('projects_input');
    let hojaa = document.getElementById('hojaa');
    if (getid === "profile") {
        profile_input.checked = true;
        
        skill_input.checked = false;
        contact_input.checked = false;
        projects_input.checked = false;
        hojaa.classList.add('hidden');
    }
    if (getid === "skill") {
        skill_input.checked = true;
        
        contact_input.checked = false;
        projects_input.checked = false;
        profile_input.checked = false;
    }
    if (getid === "contact"){
        contact_input.checked = true;
        
        projects_input.checked = false;
        profile_input.checked = false;
        skill_input.checked = false;
    }
    if (getid === "projects"){
        projects_input.checked = true;

        contact_input.checked = false;
        skill_input.checked = false;
        profile_input.checked = false;
    }

}
function skill2() {

    let inputs = document.getElementById('features');
    inputs.checked = false;

}

if (typeof (Storage) !== "undefined") {
    // Store
    if (localStorage.getItem("mode") === null)
        localStorage.setItem("mode", true);
    // Retrieve
    console.log(localStorage.getItem("mode"));
} else {
    alert("your browser does not support js")
}

let changed = localStorage.getItem("mode");
let toggle_btn_change;

if (changed === "true") {
    toggle_btn_change = false;
    toggleBtn.classList.remove('toggle-btn-left');
    toggleBtn.classList.add('toggle-btn-right');
    darkMode();
}
else if (changed === "false") {
    toggle_btn_change = true;
    toggleBtn.classList.remove('toggle-btn-right');
    toggleBtn.classList.add('toggle-btn-left');
    lightMode();

}

function modeChange() {
    if (toggle_btn_change) {
        toggle_btn_change = false;
        toggleBtn.classList.remove('toggle-btn-left');
        toggleBtn.classList.add('toggle-btn-right');
        localStorage.setItem("mode", true);
        darkMode();
    }
    else if (toggle_btn_change === false) {
        toggle_btn_change = true;
        toggleBtn.classList.remove('toggle-btn-right');
        toggleBtn.classList.add('toggle-btn-left');
        localStorage.setItem("mode", false);
        lightMode();
    }
}
function lightMode() {
    document.body.style.backgroundImage = 'linear-gradient(rgb(0 196 255), rgb(30 155 168))';
}
function darkMode() {
    document.body.style.backgroundImage = 'linear-gradient(rgb(2, 3, 22), rgb(47, 35, 61))';

}

    // (function(elementSelector) {
    //     var dragStartX, dragStartY; var objInitLeft, objInitTop;
    //     var inDrag = false;
    //     var dragTarget = document.querySelector(elementSelector);
    //     dragTarget.addEventListener("mousedown", function(e) {
    //       inDrag = true;
    //       objInitLeft = dragTarget.offsetLeft; objInitTop = dragTarget.offsetTop;
    //       dragStartX = e.pageX; dragStartY = e.pageY;
    //     });
    //     document.addEventListener("mousemove", function(e) {
    //       if (!inDrag) {return;}
    //       dragTarget.style.left = (objInitLeft + e.pageX-dragStartX) + "px";
    //       dragTarget.style.top = (objInitTop + e.pageY-dragStartY) + "px";
    //     });
    //     document.addEventListener("mouseup", function(e) {inDrag = false;});
    //   }("#bulding"))