// console.log("hiiiii")
let btn = document.querySelector("#submit")
let bag = [];
let container = document.querySelector("#product-container");
fetch("json/glasses.json")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    bag = data
    console.log(data)
    display(bag)
    console.log(bag)
    
  })
  


// function display(data){
//     container.innerHTML = null;
//     data.forEach((element,index)=>{

//       let div = document.createElement("div");
//       let card = document.createElement("div");
      // let image = document.createElement("img")
      // image.setAttribute("src",element.img)

      // let name = document.createElement("h3")
      // name.textContent = element.company
      // let colour = document.createElement("h3")
      // colour.textContent = element.color
      // let frametype = document.createElement("h3")
      // frametype.textContent = element.frametype

      // let genger= document.createElement("h3")
      // genger.textContent = element.genger

    // let category = document.createElement("p")
    // category.textContent = element.category

//     let price = document.createElement("p")
//     price.textContent = element.price
//     let rating = document.createElement("p")
//     rating.textContent = element.rating
//     let size = document.createElement("p")
//     size.textContent = element.size

//     let button = document.createElement("button")
//     button.textContent = "Tap To Add";
//     button.style.backgroundColor = "green";
//     button.style.borderRadius = "10px"
//     button.style.height = "30px"
//     button.addEventListener("click", function () {
//       console.log("working")

     
    
     

//       let data2 = JSON.parse(localStorage.getItem("product")) || [];
//       data2.push(element)
      
      
//       localStorage.setItem("product", JSON.stringify(data2))

     
//     })
//     div.append(image)
//     card.append(name,colour,frametype,genger,category,price,rating,size,button)
//     container.append(div,card)
//     })
// }


function display(data) {
   
    
  container.innerHTML = "";
  data.forEach((element, index) => {

    let div = document.createElement("div");
    let image = document.createElement("img")
    image.setAttribute("src",element.image)
    
    let card = document.createElement("div");
   
    let name = document.createElement("h3")
    name.textContent = element.company;
    let colour = document.createElement("h3")
    colour.textContent = element.color
    let frametype = document.createElement("h3")
    frametype.textContent ="Frametype  "+ element.frametype
   
    frametype.style.fontFamily="sans-serif Verdana, Geneva, Tahoma, sans-serif"
    let genger= document.createElement("h3")
    genger.textContent ="Size = "+ element.genger
    genger.style.fontWeight = "500"
    genger.style.fontFamily="sans-serif Verdana, Geneva, Tahoma, sans-serif"
    let category = document.createElement("p")
    category.textContent = element.company
    category.style.fontSize = "20px";
    category.style.fontWeight = "900";

    let description = document.createElement("p")
    description.textContent ="Description"+" " +element.description;
    description.style.fontWeight = "900"
    description.style.fontFamily="sans-serif Verdana, Geneva, Tahoma, sans-serif"
        let price = document.createElement("p")
    price.textContent ="On tag price "+element.price

    let button = document.createElement("button")
    button.textContent = "Tap To Add";
    button.style.backgroundColor = "#f15a22";
    button.style.border="1px solid black";
    button.style.color="white"
    button.style.borderRadius = "10px"
    button.style.height = "30px"
    button.addEventListener("click", function () {
      console.log("working")

     
    
     

      let data2 = JSON.parse(localStorage.getItem("product")) || [];
      data2.push(element)
      
      
      localStorage.setItem("product", JSON.stringify(data2))

     
    })
    div.append(image)
    card.append(name,colour,frametype,genger,category ,price, button)
    container.append(div,card)
  })
 
}










   
        btn.addEventListener("click",function(event){
            filter(event)
        })
        
        function filter(){
                let max = document.querySelector(".range-max")
                let min = document.querySelector(".range-min")
                
                let filternew = bag.filter(function(element){
                    if(Number(element.price)>=min.value && Number(element.price)<=max.value){
                      return element
                    }
                   
                   
                })
                display(filternew)
            }
        

// let displaybutton = document.querySelector("#display")
// let cont = document.getElementById(".container")
// displaybutton.addEventListener("click",function(){
//     displaybutton.textContent = "-";
// cont.style.display = "block"
// })

   let sort = document.querySelector(".sort")
   console.log(sort)
   sort.addEventListener("change",(event)=>{
    let sortdata = event.target.value
    console.log(sortdata)
    if(sortdata=="LTH"){
      bag.sort((a,b)=>a.price-b.price)
    }
    else if(sortdata=="HTL"){
      bag.sort((a,b)=>b.price-a.price)
    }
    else{
      window.location.reload()
    }
    display(bag)
   })

   function search(){
    container.innerHTML=null
    let q = document.querySelector(".input").value;
    console.log("working")
    let newdata = bag.filter(function(element){
     return element.description.toLowerCase().includes(q.toLowerCase())
     
   })
     display(newdata)
    
   }

   let toggle = document.querySelector("form>div");
   let tapto = document.querySelector("#brandspan")
   let tickbar  = document.querySelector(".tickbar");
   tapto.addEventListener("click",function(){
    toggle.style.display = "block"
    
   })
