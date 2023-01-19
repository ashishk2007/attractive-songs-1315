fetch("json/makeup.json").then((res) => res.json()).then((data) => {
console.log(data);
display(data)
});

let container = document.getElementById("item-container");
let length = document.getElementById("length")


function display(cards){


    if(cards.length==1){
        length.innerText=`${cards.length} Item`
    }
    else if(cards.length>1){
        length.innerText=`${cards.length} Items`
    }
    
    
    
cards.forEach(element => {
    
    let main = document.createElement("div");
    main.id= "main"

    let imageDiv = document.createElement("div");
    imageDiv.id="imageDiv"
    let image = document.createElement("img");
    image.src= element.image;
    imageDiv.append(image)

    let detailsDiv = document.createElement("div");
    detailsDiv.id = "detailsDiv"
    let p = document.createElement("po");
    p.innerText = element.name;
    detailsDiv.append(p);


    let btnDiv = document.createElement("div");
    btnDiv.id = "btnDiv"
    let minusBtn = document.createElement("button");
    minusBtn.innerText = "-";
    let itemsCount = document.createElement("span");
    itemsCount.innerText=1;
    let plusBtn = document.createElement("button");
    plusBtn.innerText = "+";
    
    btnDiv.append(minusBtn,itemsCount,plusBtn);

    let priceDiv = document.createElement("div");
    priceDiv.id= "priceDiv"
    let priceOfItem = document.createElement("span");
    priceOfItem.innerText = `₹${element.price* +itemsCount.innerText}`
    priceDiv.append(priceOfItem);


    main.append(imageDiv,detailsDiv,btnDiv,priceDiv);

    container.append(main)


    

    });

    let amount = document.getElementById("amount");
    var totalAmount = 0
    for(let item of cards)
    {
       totalAmount  += +(item.price)
    }

    
    amount.innerText = totalAmount

}


//   console.log("hey what the hell is this")