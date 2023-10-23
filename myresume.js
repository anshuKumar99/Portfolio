let homeSection=document.getElementById('body-header');
let aboutSection=document.getElementById('about');
let skillSection=document.getElementById('skills');
let experienceSection=document.getElementById('experience');
let educationSection=document.getElementById('education');
let portfolioSection=document.getElementById('portfolio');
let contactSection=document.getElementById('contact');


let navMenuAbout=document.getElementById('nav-menu-about');
let navMenuSkills=document.getElementById('nav-menu-skills');
let navMenuExperience=document.getElementById('nav-menu-experience');
let navMenuEducation=document.getElementById('nav-menu-education');
let navMenuPortfolio=document.getElementById('nav-menu-portfolio');
let navMenuContact=document.getElementById('nav-menu-contact');

let currentPos=0;
let interval;

navMenuAbout.addEventListener("click",function(event){
    event.preventDefault();
    interval=setInterval(function() {
        let targetPosAboutSection=aboutSection.getBoundingClientRect().top;
        if(targetPosAboutSection<=0){
        currentPos=0;
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
    currentPos+=50;
},10);
});

navMenuSkills.addEventListener("click",function(event){
    event.preventDefault();
    interval=setInterval(function() {
        let targetPosSkillSection=skillSection.getBoundingClientRect().top;
        if(targetPosSkillSection<=0){
            currentPos=0;
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,50);
        currentPos+=50;
    },10);
});

navMenuExperience.addEventListener("click",function(event){
    event.preventDefault();
    interval=setInterval(function() {
        let targetPosExperienceSection=experienceSection.getBoundingClientRect().top;
        if(targetPosExperienceSection<=0){
            currentPos=0;
             clearInterval(interval);
             return;
        }
        window.scrollBy(0,50);
        currentPos+=50;
    },10);
});

navMenuEducation.addEventListener("click",function(event){
    event.preventDefault();
    interval=setInterval(function() {
        let targetPosEducationSection=educationSection.getBoundingClientRect().top;
    if(targetPosEducationSection<=0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
    currentPos+=50;
},10);
});

navMenuPortfolio.addEventListener("click",function(event){
    event.preventDefault();
    interval=setInterval(function() {
        let targetPosPortfolioSection=portfolioSection.getBoundingClientRect().y;
    if(targetPosPortfolioSection<=0){
        currentPos=0;
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
    currentPos+=50;
},10);
});

navMenuContact.addEventListener("click",function(event){
    event.preventDefault();
    interval=setInterval(function() {
        let targetPosContactSection=contactSection.getBoundingClientRect().top;
    if(targetPosContactSection<=70){
        currentPos=0;
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
    currentPos+=50;
},10);
});

let backToTopBtn =document. getElementById('backToTop');
backToTopBtn.addEventListener("click",function(event){
    event.preventDefault();
    interval=setInterval(function(){
        let targetPosition=homeSection.getBoundingClientRect().top;
        if(targetPosition==0){
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,-50);
    },10);
})