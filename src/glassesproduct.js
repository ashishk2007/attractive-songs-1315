// console.log("hiiiii")

let container = document.querySelector("#container");
fetch("json/glasses.json")
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
      image.setAttribute("src",element.img)

      let name = document.createElement("h3")
      name.textContent = element.company
      let colour = document.createElement("h3")
      colour.textContent = element.color
      let frametype = document.createElement("h3")
      frametype.textContent = element.frametype

      let genger= document.createElement("h3")
      genger.textContent = element.genger

    let category = document.createElement("p")
    category.textContent = element.category

    let price = document.createElement("p")
    price.textContent = element.price
    let rating = document.createElement("p")
    rating.textContent = element.rating
    let size = document.createElement("p")
    size.textContent = element.size

    let button = document.createElement("button")
    button.textContent = "Tap To Add";

    div.append(image,name,colour,frametype,genger,category,price,rating,size,button)
    container.append(div)
    })
}