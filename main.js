
document.querySelector('.page2').style.display = 'none';
document.querySelector('.page3').style.display = 'none';
document.querySelector('.page4').style.display = 'none';
document.querySelector('.page5').style.display = 'none';
document.querySelector('.page6').style.display = 'none';
document.querySelector('.page7').style.display = 'none';
let explore = document.querySelector('.btn1');
let back = document.querySelector('.btn2');
back.addEventListener('click', hidepage2);
explore.addEventListener('click', (e)=> {
    document.querySelector('.page1').style.display = 'none';
    document.querySelector('.page2').style.display = 'block';
});
let satellite = document.querySelector('.ch1');
let backtosatellite = document.querySelector('.backtosatellite');
backtosatellite.addEventListener('click', hidepage3);
satellite.addEventListener('click', (e)=> {
    document.querySelector('.page2').style.display = 'none';
    document.querySelector('.page3').style.display = 'block';
});
function hidepage3() {
    document.querySelector('.page3').style.display = 'none';
    document.querySelector('.page2').style.display ='block';
} 
let missions = document.querySelector('.ch2');
let backtomission = document.querySelector('.backtomission');
backtomission.addEventListener('click', hidepage4);
missions.addEventListener('click', (e)=> {
    document.querySelector('.page2').style.display = 'none';
    document.querySelector('.page4').style.display ='block';
});
function hidepage4() {
    document.querySelector('.page4').style.display = 'none';
    document.querySelector('.page2').style.display ='block'
} 
function hidepage2() {
    document.querySelector('.page2').style.display = 'none';
    document.querySelector('.page1').style.display ='block'
} 
let more = document.querySelector('.btn3');
let backtofuture = document.querySelector('.backtofuture');
backtofuture.addEventListener('click', hidepage5);
more.addEventListener('click', (e)=> {
    document.querySelector('.page2').style.display = 'none';
    document.querySelector('.page5').style.display ='block';
});
function hidepage5() {
    document.querySelector('.page5').style.display = 'none';
    document.querySelector('.page2').style.display ='block'
} 
let moredet = document.querySelector('.btn4');
let backtoachi = document.querySelector('.backtoachi');
backtoachi.addEventListener('click', hidepage6);
moredet.addEventListener('click', (e)=> {
    document.querySelector('.page2').style.display = 'none';
    document.querySelector('.page6').style.display ='block';
});
function hidepage6() {
    document.querySelector('.page6').style.display = 'none';
    document.querySelector('.page2').style.display ='block'
} 
let seemore = document.querySelector('.btnm');
let backtoglory = document.querySelector('.backtoglory');
backtoglory.addEventListener('click', hidepage7);
seemore.addEventListener('click', (e)=> {
    document.querySelector('.page2').style.display = 'none';
    document.querySelector('.page7').style.display ='block';
});
function hidepage7() {
    document.querySelector('.page7').style.display = 'none';
    document.querySelector('.page2').style.display ='block'
} 
function togglemenu(){
    let menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}