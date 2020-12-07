AOS.init()

const $menu=document.getElementById("menu")
const $navtoggle=document.getElementById("navtoggle")

$navtoggle.addEventListener('click',function (){
    $navtoggle.collapse('hide')
  })

$navtoggle.addEventListener('click',function (){
    if (Toggle==true) {
        $menu.style.display ='none',Toggle=false;
    }
    else if (Toggle==false) {
        $menu.style.display ='block',Toggle=true;
    }
})
let Toggle=false;