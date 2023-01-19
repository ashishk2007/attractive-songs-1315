
let container = document.querySelector("#container");
fetch("json/mens.json")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    console.log(data)
    display(data)
  })


function display(data) {
  container.innerHTML = null;
  data.forEach((element, index) => {

    let div = document.createElement("div");
    let image = document.createElement("img")
    image.setAttribute("src", element.image)
    let card = document.createElement("div");
    let an = document.createElement("div")
    let name = document.createElement("h3")
    name.textContent =element.brand

    let category = document.createElement("p")
    category.textContent ="Category"+"    " +element.category
    category.style.fontSize = "20px";
    category.style.fontWeight = "900";

    let description = document.createElement("p")
    description.textContent ="Description"+" " +element.description;
    description.style.fontWeight = "900"
    description.style.fontFamily="sans-serif Verdana, Geneva, Tahoma, sans-serif"
        let price = document.createElement("p")
    price.textContent ="On tag price"+element.price

    let button = document.createElement("button")
    button.textContent = "Tap To Add";
    button.style.backgroundColor = "green";
    button.style.borderRadius = "10px"
    button.style.height = "30px"
    button.addEventListener("click", function () {
      console.log("working")
      let data = JSON.parse(localStorage.getItem("product")) || [];
      data.push(element)

      localStorage.setItem("product", JSON.stringify(data))

    })
    div.append(image)
    card.append(name, category,description ,price, button)
    container.append(div,card)
  })
}
