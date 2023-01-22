const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;
let data = JSON.parse(localStorage.getItem("product")) || [];

let btn = document.querySelector("#submit")


// console.log(data2)

console.log(data)

// console.log(rangeInput.value)

function sliderrange(){
    setTimeout(() => {
        rangeInput.forEach(input =>{
            input.addEventListener("input", e =>{
                let minVal = parseInt(rangeInput[0].value),
                maxVal = parseInt(rangeInput[1].value);
                console.log("maxVal", maxVal)
                console.log("minval",minVal)
                console.log(minVal,maxVal)
                if((maxVal - minVal) < priceGap){
                    if(e.target.className === "range-min"){
                        rangeInput[0].value = maxVal - priceGap
                    }else{
                        rangeInput[1].value = minVal + priceGap;
                    }
                }
                else{
                    priceInput[0].value = minVal;
                    priceInput[1].value = maxVal;
                    range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                }
    
    
                
            });
        });
    }, 2000);

   
}

 sliderrange()
// console.log(input.value)

let bag = [];
let container = document.querySelector("#product-container");
fetch("json/makeup.json")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    bag = data
    console.log(data)
    display(bag)
    console.log(bag)
    
  })
  


function display(data) {
   
    
  container.innerHTML = "";
  data.forEach((element, index) => {

    let div = document.createElement("div");
    let image = document.createElement("img")
    image.setAttribute("src", element.image)
    
    let card = document.createElement("div");
    let an = document.createElement("div")
    let name = document.createElement("h3")
    name.textContent =element.name

    let category = document.createElement("p")
    category.textContent ="Category"+"    " +element.type
    category.style.fontSize = "20px";
    category.style.fontWeight = "900";

    
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
    card.append(name, category ,price, button)
    container.append(div,card)
  })
 
}

// console.log(bag)








    // console.log(min.value)
    // console.log(max.value)
   
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
     return element.name.toLowerCase().includes(q.toLowerCase())
     
   })
     display(newdata)
    
   }

   let toggle = document.querySelector("form>div");
   let tapto = document.querySelector("#brandspan")
   let tickbar  = document.querySelector(".tickbar");
   tapto.addEventListener("click",function(){
    toggle.style.display = "block"
    
   })

   
    

    