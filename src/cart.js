
let products = JSON.parse(localStorage.getItem("product"))||[];

let container = document.getElementById("item-container");
let length = document.getElementById("length");
let amount = document.getElementById("amount");
let pay1 = document.getElementById("payAmt")
let pay2 = document.getElementById("payAmt2");
let cartitem= document.getElementById("cartlength");


display(products)

function display(cards){


    if(cards.length==1){
        length.innerText=`${cards.length} Item`
    }
    else if(cards.length>1){
        length.innerText=`${cards.length} Items`
    }
    else{
      length.innerText=`0 Item`
    }
    var totalAmt = 0;
container.innerHTML=null
cartitem.innerText=cards.length+" item in your bag";
cards.forEach((element,index) => {
    
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
    p.innerText = element.title;

    let detSpan = document.createElement("span");
    detSpan.innerText=element.description;
    detSpan.id="type";

    detailsDiv.append(p,detSpan);


    let btnDiv = document.createElement("div");
    btnDiv.id = "btnDiv"
    let minusBtn = document.createElement("button");
    minusBtn.innerText="-"
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



   
        var priceOfItem = document.createElement("p");
        priceOfItem.innerText = `₹${element.price* +itemsCount.innerText}`;

        totalAmt += element.price* +itemsCount.innerText;
        console.log(totalAmt);


        plusBtn.addEventListener("click", () => {
            itemsCount.innerText= +(itemsCount.innerText)+1;
            priceOfItem.innerText = `₹${element.price* +itemsCount.innerText}`;
        })
        
        btnDiv.append(minusBtn,itemsCount,plusBtn);

        let priceDiv = document.createElement("div");
        priceDiv.id= "priceDiv";


        let delSpan = document.createElement("button");
        delSpan.innerText="Remove";
        delSpan.id="remove"
        let col = "#ef4e28"
        delSpan.style.color=`${col}`

        delSpan.addEventListener("click", () => {
          cards.splice(index,1);

          display(cards)

        })


        let save = document.createElement("span");
        save.id="save"
        save.innerText="Save for Later"
        
    
        priceDiv.append(priceOfItem,delSpan,save);

        let hr1 = document.createElement("hr");
        hr1.id="hr"

        main.append(imageDiv,detailsDiv,btnDiv,priceDiv,hr1);

        container.append(main);
        

    });
    if(cards.length==0){
      amount.innerText =0;
        pay1.innerText = 0;
        pay2.innerText = 0;
    }else{
      amount.innerText =totalAmt;
        pay1.innerText = totalAmt
        pay2.innerText = totalAmt
    }
}







//   console.log("hey what the hell is this")

