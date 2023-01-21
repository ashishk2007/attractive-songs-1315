// fetch("json/makeup.json").then((res) => res.json()).then((data) => {
// console.log(data);
// display(data) 

// let checkOutDiv = document.getElementById("total-div");


// let summaryDiv = document.createElement("div");
// summaryDiv.id = "summaryDiv"
// let image = document.createElement("img");
// image.src="./images/download.png";
// image.width= 100; 

// let span2 = document.createElement("span");
// span2.id = "payDesc"

// h1.innerText = "Payment Summary";

// summaryDiv.append(image,span2);

// // let bagDiv = document.createElement("")



// checkOutDiv.append(summaryDiv);




// });

let product = [
    {
      "id": 1,
      "image": "https://n.nordstrommedia.com/id/sr3/7fd3f7ea-1536-47f0-bc0a-b3d71590e31f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "Nike",
      "description": "Sports Wear Club Fleece Seweatpants (Big Boy)",
      "price": " 2902", 
      "category": "Lower"
    },
    {
      "id": 2,
      "image": "https://n.nordstrommedia.com/id/sr3/0de850f5-687a-4462-8760-7e9bd33113ef.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "Nike",
      "description": "Kids Fleece Stripe Joggers (Little Kid and Big Kids)",
      "price": " 4729" ,
      "category": "Lower"
    },
    {
      "id": 3,
      "image": "https://n.nordstrommedia.com/id/sr3/cca5c5a6-7690-4943-939a-9662c0e94d14.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "Levi's",
      "description": "Levi's® 502 Strong Performance Straight Leg Jeans",
      "price": " 3611 " ,
      "category": "Jeans"
    },
    {
      "id": 4,
      "image": "https://n.nordstrommedia.com/id/sr3/caeed694-fd63-4d02-9360-531a5bcb85d8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "FEAR OF GOD ESSENTIALS",
      "description": "Kids' Relaxed Sweatpants",
      "price": " 5589 " ,
      "category": "Jeans"
    },
   
    {
      "id": 5,
      "image": "https://n.nordstrommedia.com/id/sr3/b625ae3c-78fb-4070-a1c4-38009da99307.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "Joe's",
      "description": "Kids' The Brixton Slim Straight Leg Jeans",
      "price": " 4643 " ,
      "category": "Jeans"
    },
    {
      "id": 6,
      "image": "https://n.nordstrommedia.com/id/sr3/74138ae1-24a1-4659-b546-a501918b3abe.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "Nike",
      "description": "Windrunner Water Resistant Hooded Jacket",
      "price": " 5589 ",
      "category": "Jacket" 
    },
    
    {
      "id": 11,
      "image": "https://n.nordstrommedia.com/id/sr3/18fce06a-64ac-4d76-b413-b82997a239e9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "7 DIAMONDS",
      "description": "Liberty Geometric Stretch Button-Up Shirt",
      "price": " 8513" ,
      "category": "Shirts"
    },
    {
      "id": 12,
      "image": "https://n.nordstrommedia.com/id/sr3/8e28c8f6-b927-4d1a-964c-75797483dcd7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "7 DIAMONDS",
      "description": "Generation Plaid Stretch Flannel Button-Up Shirt",
      "price": " 10749" ,
      "category": "Shirts"
    },
    {
      "id": 13,
      "image": "https://n.nordstrommedia.com/id/sr3/22216d5e-3a7b-440c-8548-a2aeca604e0f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "NORDSTROM",
      "description": "Plaid Trim Fit Flannel Button-Down Shirt",
      "price": " 4298" ,
      "category": "Shirts"
    },
    {
      "id": 14,
      "image": "https://n.nordstrommedia.com/id/sr3/4660c6f3-ed4a-425f-bbf2-9758f2978e8d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "VINCE",
      "description": "Cotton Blend Shirt Jacket",
      "price": " 25369" ,
      "category": "Jacket"

    },
    {
      "id": 15,
      "image": "https://n.nordstrommedia.com/id/sr3/6314cc2f-4aa3-417c-8dfb-1fc0c65c9676.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "SCHOTT NYC",
      "description": "Military Henley Sweater",
      "price": " 13329" ,
      "category": "Jacket"

    },
    {
      "id": 16,
      "image": "https://n.nordstrommedia.com/id/sr3/ecbb2422-7cdd-476c-b015-c9fde880d9a7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "TOPMAN",
      "description": "Solid Cotton Turtleneck",
      "price": " 3267" ,
      "category": "Jacket"
    },
    {
      "id": 17,
      "image": "https://n.nordstrommedia.com/id/sr3/1bf9b189-287e-4398-be2d-ac0cc400fc8d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "TOPMAN",
      "description": "P65 Houndstooth Crewneck Sweater",
      "price": " 5589" ,
      "category": "Jacket"
    },
    {
      "id": 18,
      "image": "https://n.nordstrommedia.com/id/sr3/6cd96fd1-4491-4ac0-9a49-c4a0e880ab90.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "CHARATT WORK IN PROGRESS",
      "description": "Logo Pocket T-Shirt",
      "price": " 4127",
      "category": "T-shirt" 
    },
    {
      "id": 19,
      "image": "https://n.nordstrommedia.com/id/sr3/5f1db63d-858e-489d-8bb3-51aa4368ce59.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "VUORI",
      "description": "Current Tech Long Sleeve T-Shirt",
      "price": " 5847" ,
      "category": "T-shirt"
    },
    {
    "id": 20,
    "image": "https://n.nordstrommedia.com/id/sr3/83f63d30-0350-49b1-aa3d-90788ce27287.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    "title": "Arrives Before Christmas",
    "brand": "ICECREAM",
    "description": "Visitation Cotton Graphic Tee",
    "price": " 3009",
    "category": "T-shirt"
  } 
  ]





// let products = JSON.parse(localStorage.getItem("product"))||[];

// console.log(products)

let container = document.getElementById("item-container");
let length = document.getElementById("length");
let amount = document.getElementById("amount");
let pay1 = document.getElementById("payAmt")
let pay2 = document.getElementById("payAmt2");


display(product)

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
        amount.innerText =totalAmt;
        pay1.innerText = totalAmt
        pay2.innerText = totalAmt

    });

}







//   console.log("hey what the hell is this")

