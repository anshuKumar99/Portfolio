
//Array of all Anchor tags used in nav menu
var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');

//creating interval variable in global scope so scrollVertically() will know which interval to clear
var interval; 

//for loop is used for accessing all the elements of array navMenuAnchorTags
for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        //To prevent default behaviour of anchor tag
        event.preventDefault();

        //To access all the section ID(this.textContent), remove extra spaces if present(trim), and convert it to lowercase(toLowercase)
        var targetSectionID=this.textContent.trim().toLowerCase();

        //To get the target section using targetSectionID
        var targetSection=document.getElementById(targetSectionID);

        //This will run until we reach the target section
        interval=setInterval(scrollVertically,15,targetSection,targetSectionID);
    })
}

function scrollVertically(targetSection,targetSectionID){
    //To get the distance of target section from top
    var targetSectionCoordinates=targetSection.getBoundingClientRect();
    if(targetSectionID=="contact" && targetSectionCoordinates.top<=70){
        clearInterval(interval);
        return;
    }
    if(targetSectionCoordinates.top<=0){
        clearInterval(interval);
        return;
    }
    //Until we reach target section window will scroll by 50px after every 20 miliseconnds
    window.scrollBy(0,50);

}

//Back to Top feature
let homeSection=document.getElementById('body-header');
let backToTopBtn =document. getElementById('backToTop');
backToTopBtn.addEventListener("click",function(event){
    event.preventDefault();
    var intervalToTop=setInterval(function(){
        let targetPosition=homeSection.getBoundingClientRect().top;
        if(targetPosition==0){
            clearInterval(intervalToTop);
            return;
        }
        window.scrollBy(0,-50);
    },15);
})
