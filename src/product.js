// console.log("hiiiii")

let container = document.querySelector("#container");
fetch("json/mens.json")
.then((res)=>{
   return res.json()
})
.then((data)=>{
     console.log(data)
    display(data)
})


function display(data){
    container.innerHTML = null;
    data.forEach((element,index)=>{

      let div = document.createElement("div");
      let image = document.createElement("img")
      image.setAttribute("src",element.image)

      let name = document.createElement("h3")
      name.textContent = element.brand

    let category = document.createElement("p")
    category.textContent = element.category

    let price = document.createElement("p")
    price.textContent = element.price

    let button = document.createElement("button")
    button.textContent = "Tap To Add";

    div.append(image,name,category,price,button)
    container.append(div)
    })
}