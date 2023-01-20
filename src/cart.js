fetch("json/makeup.json").then((res) => res.json()).then((data) => {
console.log(data);
display(data)

let checkOutDiv = document.getElementById("total-div");


let summaryDiv = document.createElement("div");
summaryDiv.id = "summaryDiv"
let image = document.createElement("img");
image.src="./images/download.png";
image.width= 100; 

let span2 = document.createElement("span");
span2.id = "payDesc"

h1.innerText = "Payment Summary";

summaryDiv.append(image,span2);

// let bagDiv = document.createElement("")



checkOutDiv.append(summaryDiv);




});

let container = document.getElementById("item-container");
let length = document.getElementById("length");
let amount = document.getElementById("amount");


function display(cards){


    if(cards.length==1){
        length.innerText=`${cards.length} Item`
    }
    else if(cards.length>1){
        length.innerText=`${cards.length} Items`
    }
    
    var totalAmt = 0;
    
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
    let p = document.createElement("p");
    p.innerText = element.name;

    let detSpan = document.createElement("span");
    detSpan.innerText=element.type;
    detSpan.id="type";

    detailsDiv.append(p,detSpan);


    let btnDiv = document.createElement("div");
    btnDiv.id = "btnDiv"
    let minusBtn = document.createElement("button");
    let minusImg = document.createElement("img");

    minusBtn.className = "btn";
    minusBtn.id = "minBtn";
    minusBtn.addEventListener("click", () => {
        if(+(itemsCount.innerText)>1){
        itemsCount.innerText= +(itemsCount.innerText)-1;
        priceOfItem.innerText = `₹${element.price* +itemsCount.innerText}`
        };

    });

    let itemsCount = document.createElement("span");
    itemsCount.innerText=1;
  
   

    let plusBtn = document.createElement("button");
    plusBtn.innerText = "+";
    plusBtn.className = "btn";
    plusBtn.id = "plsBtn";



   
        var priceOfItem = document.createElement("span");
        priceOfItem.innerText = `₹${element.price* +itemsCount.innerText}`;

        totalAmt += element.price* +itemsCount.innerText;
        console.log(totalAmt);

        if(+(itemsCount.innerText==1)){
            minusBtn.innerHTML =  null
        }

        plusBtn.addEventListener("click", () => {
            itemsCount.innerText= +(itemsCount.innerText)+1;
            priceOfItem.innerText = `₹${element.price* +itemsCount.innerText}`;
            if(+(itemsCount.innerText)>1){
                minusBtn.innerText="-"
            }
            
        })
        
        btnDiv.append(minusBtn,itemsCount,plusBtn);

        let priceDiv = document.createElement("div");
        priceDiv.id= "priceDiv"
    
        priceDiv.append(priceOfItem);


        main.append(imageDiv,detailsDiv,btnDiv,priceDiv);

        container.append(main);
        amount.innerText =totalAmt;

    });

}







//   console.log("hey what the hell is this")