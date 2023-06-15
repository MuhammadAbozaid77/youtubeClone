let barIcon = document.getElementById("barIcon");
let mainSidebar = document.getElementById("mainSidebar");
let RSidebar = document.getElementById("RSidebar");
let leftMain = document.getElementById("leftMain");
let rightMain = document.getElementById("rightMain");




barIcon.addEventListener( 'click' , function(){
    if(mainSidebar.style.display === "flex"){
        mainSidebar.style.display = "none" ;
        RSidebar.style.display = "block";
    }
    else {
        mainSidebar.style.display = "flex" ;
        RSidebar.style.display = "none"
    }
})