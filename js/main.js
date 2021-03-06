// declared global variables
let bgLogo = document.querySelector('.logo-bg');
let logo = document.querySelector('.logo');
let leftSide = document.querySelector('.left-side-bg');
let rightSide = document.querySelector('.right-side-bg');
let hplogo = document.querySelector('.logo-hp');
let intro = document.querySelector('.intro');
let home = document.querySelector('.home-page')
let musicNav = document.querySelector('.music-nav');
let music = document.querySelector('.music-content');
let musicDesk = document.querySelector('.music-desk');
let rightCloseMusic = document.querySelector('.cross-right-music');
let aboutNav = document.querySelector('.about-nav');
let about = document.querySelector('.about-content');
let aboutDesk = document.querySelector('.about-desk');
let rightCloseAbout = document.querySelector('.cross-right-about');
let showsNav = document.querySelector('.shows-nav');
let shows = document.querySelector('.shows-content');
let showsDesk = document.querySelector('.shows-desk')
let rightCloseShows = document.querySelector('.cross-right-shows');
let shopNav = document.querySelector('.shop-nav');
let shop = document.querySelector('.shop');
let shopDesk = document.querySelector('.shop-desk');
let rightCloseShop = document.querySelector('.cross-right-shop');


// hide everythin at the beginning except for intro page
home.classList.add('hide');
music.classList.add('hide');
about.classList.add('hide');
shows.classList.add('hide');
shop.classList.add('hide');


//// animation on intro page - it doesn't work because of the 'layers'
//logo.addEventListener('click', makeAnimations)
//
//function makeAnimations(){    
//    leftSide.classList.add('left-side-bgCSS');
//    rightSide.classList.add('right-side-bgCSS');
//}

// function which will move you from intro page to home page
bgLogo.addEventListener('click', openHomePage);

function openHomePage(){
    intro.classList.add('hide');
    home.classList.remove('hide');
    music.classList.add('hide');
    shows.classList.add('hide');
    about.classList.add('hide');
    shop.classList.add('hide');
}

/////////////////////////////////////////////////////
// MUSIC SECTION
//musicNav.addEventListener('mouseover', gotoMusic);
musicNav.addEventListener('click', gotoMusic);
musicDesk.addEventListener('click', gotoMusic);

function gotoMusic(){
    intro.classList.add('hide');
    home.classList.remove('hide');
    music.classList.remove('hide');
    shows.classList.add('hide');
    about.classList.add('hide');
    shop.classList.add('hide');
    musicNav.style.display = "none";
    aboutNav.style.display = "none";
    showsNav.style.display = "none";
    shopNav.style.display = "none";
}

rightCloseMusic.addEventListener('click', backToHomePageR)

function backToHomePageR(){
    intro.classList.add('hide');
    home.classList.remove('hide');
    music.classList.add('hide');
    shows.classList.add('hide');
    about.classList.add('hide');
    shop.classList.add('hide');
    musicNav.style.display = "block";
    aboutNav.style.display = "block";
    showsNav.style.display = "block";
    shopNav.style.display = "block";
    
}

/////////////////////////////////////////////////////
// SHOWS SECTION
//showsNav.addEventListener('mouseover', gotoShows);
showsNav.addEventListener('click', gotoShows);
showsDesk.addEventListener('click', gotoShows);

function gotoShows(){
    intro.classList.add('hide');
    home.classList.remove('hide');
    music.classList.add('hide');
    shows.classList.remove('hide');
    about.classList.add('hide');
    shop.classList.add('hide');
    showsNav.style.display = "none";
    shopNav.style.display = "none";
    musicNav.style.display = "none";
    aboutNav.style.display = "none";

}

rightCloseShows.addEventListener('click', backToHomePageL)

function backToHomePageL(){
    intro.classList.add('hide');
    home.classList.remove('hide');
    music.classList.add('hide');
    shows.classList.add('hide');
    about.classList.add('hide');
    shop.classList.add('hide');
    showsNav.style.display = "block";
    shopNav.style.display = "block";
    musicNav.style.display = "block";
    aboutNav.style.display = "block";
   
}

/////////////////////////////////////////////////////
// ABOUT SECTION
//aboutNav.addEventListener('mouseover', gotoAbout);

aboutNav.addEventListener('click', gotoAbout);
aboutDesk.addEventListener('click', gotoAbout);

function gotoAbout(){
   intro.classList.add('hide');
    home.classList.remove('hide');
    music.classList.add('hide'); 
    shows.classList.add('hide');
    about.classList.remove('hide');
    shop.classList.add('hide');
    musicNav.style.display = "none";
    aboutNav.style.display = "none";
    showsNav.style.display = "none";
    shopNav.style.display = "none";
    
}

rightCloseAbout.addEventListener('click', backToHomePageR)

/////////////////////////////////////////////////////
// SHOP SECTION
//shopNav.addEventListener('mouseover', gotoShop);
shopNav.addEventListener('click', gotoShop);
shopDesk.addEventListener('click', gotoShop);

function gotoShop(){
   intro.classList.add('hide');
    home.classList.remove('hide');
    music.classList.add('hide');
    shows.classList.add('hide');
    about.classList.add('hide');
    shop.classList.remove('hide');
    showsNav.style.display = "none";
    shopNav.style.display = "none";
     musicNav.style.display = "none";
    aboutNav.style.display = "none";
    
}

rightCloseShop.addEventListener('click', backToHomePageL);

// close part of nav when you are displaying the content on desktop version
document.getElementById('musicNav').addEventListener('click', closePartOfNav);
document.getElementById('showsNav').addEventListener('click', closePartOfNav);
document.getElementById('aboutNav').addEventListener('click', closePartOfNav);
document.getElementById('shopNav').addEventListener('click', closePartOfNav);


function closePartOfNav(){
    document.getElementById('showsNav').classList.add = "hide";
    document.getElementById('shopNav').classList.add = "hide";
}

// when you click on cross you will come back to normal homepage
document.getElementById('cross').addEventListener('click', openNav);

function openNav(){
    document.getElementById('showsNav').classList.remove = "hide";
    document.getElementById('shopNav').classList.remove = "hide";
}