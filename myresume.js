
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
});


//Skill Bar Autofill feature

//fetched all the progress/skill bars that i have to animate
var skillProgressBars=document.querySelectorAll('.flex-items');

//function to initialize skill bar progress width to zero
function initialiseBar(){
    for(let bar of skillProgressBars){
        bar.style.width=0+'%';
    }
}

//function call to initialize every skill bar progress width to zero
initialiseBar();

//function to fill skill bar according to data attribute value
function fillBar(currBar){
    //accessing current visible skill bar on screen
    let fillElement=skillProgressBars[currBar];
    //get targetWidht from data attribute
    let targetWidth=skillProgressBars[currBar].getAttribute('data-progress-width');
    //Initializing currentWidht to zero and we have to keep on incresing it at every interval by using setInterval() until it becomes greater than equal to targetWidth
    let currentWidth=0;

    //At every interval we have to increase currentWidht until it will become equal to or greater than targetWidth
    let fillInterval=setInterval(function(){
        //If currentWidht is greater than equal to targetWidth then we should stop
        if(currentWidth>=targetWidth){
            clearInterval(fillInterval);
            return;
        }
        //increaing current width by 2 percent
        currentWidth+=2;
        
        //setting the width of skill bar progress to this current width
        fillElement.style.width=currentWidth + '%';
    },15);
    return;
}


//creating barAnimationDone array to keep track of animation of each skill bar progress is done or not
let barAnimationDone=new Array();
function barAnimationDoneArray(){
    //initially every skill bar has barAnimationDone set to false and it will become true for a skill bar when animation for that particular skill bar is fired/started and this will stop firing animation again and again
    for(let j=0;j<skillProgressBars.length;j++){
        barAnimationDone[j]=false;
    }

}
//Initializing barAnimationDone for every skill bar to be false
barAnimationDoneArray();

//handling scroll event on window to check whether skill bar is visible or not
window.addEventListener('scroll',function(){

    //We have to check whether skill bar is visible on screen and than we have to fill each and every bar that is visible
    for(let i=0;i<skillProgressBars.length;i++){
        if(!barAnimationDone[i] && skillProgressBars[i].getBoundingClientRect().top<window.innerHeight){
            //When a skill bar is visible on window screen then barAnimationDone will become true for that particular bar and fillBar function will be called
            barAnimationDone[i]=true;
            fillBar(i);
        }
        //if user scrolled above skill container then again all skills bars progress will be initialized to zero and barAnimationDone for all the bars will become false
        else if(skillProgressBars[0].getBoundingClientRect().top>this.window.innerHeight){
            initialiseBar();
            barAnimationDoneArray();
        }
    }
    return;
});
