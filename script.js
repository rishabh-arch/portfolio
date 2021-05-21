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
    active.classList.add('link_bottom_active');

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
let changed2;

if (changed === "true") {
    changed2 = false;
    toggleBtn.classList.remove('toggle-btn-left');
    toggleBtn.classList.add('toggle-btn-right');
    document.body.style.backgroundImage = 'linear-gradient(rgb(2, 3, 22), rgb(47, 35, 61))';
}
else if (changed === "false") {
    changed2 = true;
    toggleBtn.classList.remove('toggle-btn-right');
    toggleBtn.classList.add('toggle-btn-left');
    document.body.style.backgroundImage = 'linear-gradient(rgb(14, 173, 221), rgb(24, 240, 96))';

}

function modeChange() {
    if (changed2) {
        changed2 = false;
        toggleBtn.classList.remove('toggle-btn-left');
        toggleBtn.classList.add('toggle-btn-right');
        localStorage.setItem("mode", true);
        document.body.style.backgroundImage = 'linear-gradient(rgb(2, 3, 22), rgb(47, 35, 61))';
    }
    else if (changed2 === false) {
        changed2 = true;
        document.body.style.backgroundImage = 'linear-gradient(rgb(14, 173, 221), rgb(24, 240, 96))';
        toggleBtn.classList.remove('toggle-btn-right');
        toggleBtn.classList.add('toggle-btn-left');
        localStorage.setItem("mode", false);

    }
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