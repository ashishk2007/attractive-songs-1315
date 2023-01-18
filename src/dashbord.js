window.addEventListener("load",()=>{
    middle.style.display="block";
    addButn.style.backgroundColor="red";
})

let addButn=document.getElementById("addP");
let delBot=document.getElementById("delBot");
let bot=document.getElementById("bot");
let DelButn=document.getElementById("deletButton");
let Upbot=document.getElementById("Upbot");
let UpdateButton=document.getElementById("UpdateButton");
let dash=document.getElementById("dash");
let middle=document.getElementById("middel");

addButn.addEventListener("click",()=>{
    Upbot.style.display="none";
    UpdateButton.style.backgroundColor="gray";
    delBot.style.display="none";
    DelButn.style.backgroundColor="gray";
    bot.style.display="flex";
    addButn.style.backgroundColor="red";
    
})
DelButn.addEventListener("click",()=>{
    Upbot.style.display="none";
    UpdateButton.style.backgroundColor="gray";
    bot.style.display="none"
    addButn.style.backgroundColor="gray"
    delBot.style.display="flex";
    DelButn.style.backgroundColor="red";
})
UpdateButton.addEventListener("click",()=>{
    delBot.style.display="none";
    DelButn.style.backgroundColor="gray";
    bot.style.display="none"
    addButn.style.backgroundColor="gray"
    Upbot.style.display="flex";
    UpdateButton.style.backgroundColor="red";
})

dash.addEventListener("click",(e)=>{
    e.preventDefault();
    middle.style.display="block";
    addButn.style.backgroundColor="red"
})