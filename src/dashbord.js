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


fetch("https://63c83d65e52516043f4ebbdc.mockapi.io/MasaiMart/MasaiAdmin")
.then((res)=>{
   return res.json();
})
.then((data)=>[
    console.log(data)



])
.catch((err)=>{
    console.log(err);
})

let submitButn=document.getElementById("submitButn");
let productId=document.getElementById("prId");
let productName=document.getElementById("prName");
let ProductImg=document.getElementById("prImg");
let productTitle=document.getElementById("prTitle");
let productPrice=document.getElementById("prPrice");
let ProductDesc=document.getElementById("prDescription");

submitButn.addEventListener("click",()=>{

    let obj={
        description:ProductDesc.value,
        title:productTitle.value,
        image:ProductImg.value,
        name:productName.value,
        price:productPrice.value
    };

    fetch("https://63c83d65e52516043f4ebbdc.mockapi.io/MasaiMart/MasaiAdmin",{
        method:"POST",
        headers:{
            "Content-type" : "application/json",
        },
        body : JSON.stringify(obj)
    })
    .then((res)=>{
        let data = res.json();
        
        return data;
    })
    
})

let deleteId=document.getElementById("delPrID");
let deleteName=document.getElementById("delPrName");
let deletButton=document.getElementById("DelButn");

deletButton.addEventListener("click",()=>{
    fetch("https://63c83d65e52516043f4ebbdc.mockapi.io/MasaiMart/MasaiAdmin",{
        method:"DELETE",
        headers:{
            "Content-type" : "application/json",
        },
        
        body : JSON.stringify(obj)
    })
    .then((res)=>{
        let data = res.json();
        
        return data;
    })
})