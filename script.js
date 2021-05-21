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

    buddha_svg.classList.replace('buddha_svg_top', 'buddha_svg_top_Active');

    function skill(getid){
        const unactive = document.querySelectorAll(".page-link");
        for (var i = 0; i < unactive.length; ++i) {
            unactive[i].classList.remove('link_bottom_active');
        }
        const active = document.getElementById(getid);
        document.title = `Portfolio - ${getid}`;
    buddha_svg.classList.replace('buddha_svg_top_Active', 'buddha_svg_top_skill');
    active.classList.add('link_bottom_active');

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