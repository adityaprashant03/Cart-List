//fetch data
let renderData=document.querySelector(".renderData");
let renderCartData=document.querySelector(".renderCartData");
let dynamicCount=document.querySelector(".dynamic-count");
let Tcontainer=document.querySelector(".Tcontainer");
let totalPrice=document.getElementById("totalPrice");
let myCData=[];
let totalAmount=[];
async function getData(){
    const res=await fetch('https://fakestoreapi.com/products');
    const data=await res.json();
    // console.log(data);
    data.map((ele)=>{
        let productMainDiv = document.createElement("div");
    let createImgEle = document.createElement("img");
    let createTitle = document.createElement("p");
    let createPriceEle = document.createElement("p");
    let btnEle = document.createElement("button");
    let btnText = document.createTextNode("Add to Cart");
    let createPriceText = document.createTextNode(`Price : $${ele.price}`);
    let createTextTitle = document.createTextNode(`${ele.title.slice(0,35)}...`);
    createImgEle.setAttribute("src", ele.image);
    createImgEle.setAttribute("class", "myImages");
    productMainDiv.setAttribute("class" , "box-main")
    createTitle.appendChild(createTextTitle);
    createPriceEle.setAttribute("class" , 'price-element')
    btnEle.setAttribute("class" , "btn-element")
    createPriceEle.appendChild(createPriceText);
    createTitle.setAttribute("class" , 'productTitle')
    btnEle.appendChild(btnText);
    productMainDiv.appendChild(createImgEle);
    productMainDiv.appendChild(createTitle);
    productMainDiv.appendChild(createPriceEle);
    productMainDiv.appendChild(btnEle);
    renderData.appendChild(productMainDiv);

        function addToCart(img,price) {
            
            myCData.push({ii:img ,pp:price});
            alert("Product Added to Cart");
            dynamicCount.innerHTML = myCData.length;
            let cartMDiv=document.createElement("div");
            let cartImgEle=document.createElement("img");
            let cartTrashBtn=document.createElement("i");
            cartTrashBtn.setAttribute("class","ri-delete-bin-line");
            Tcontainer.style.display="block";
            cartTrashBtn.addEventListener("click",()=>{
                myCData=myCData.filter((item)=> item.ii!=img);
                renderCartData.removeChild(cartMDiv);
                dynamicCount.innerHTML = myCData.length;
            })
            cartImgEle.setAttribute("src",img);
            cartImgEle.setAttribute("class","cartImgElement");
            cartMDiv.setAttribute("class","cart-styling");
            let cartPriceEle=document.createElement("p");
            let cartPriceText=document.createTextNode(`$ ${price}`)   
           cartPriceEle.appendChild(cartPriceText);
           cartMDiv.appendChild(cartImgEle);
           cartMDiv.appendChild(cartPriceEle);
           cartMDiv.appendChild(cartTrashBtn);
           renderCartData.appendChild(cartMDiv);
            totalAmount.push(price);
            let cartTotal=totalAmount.reduce((accum, currName)=>{
                return accum+currName;
            })
            totalPrice.innerHTML=`Total Price : $${cartTotal}`
        }

        btnEle.addEventListener("click",()=> addToCart(ele.image,ele.price));

    })
}
getData();

function bgColorChange(){
    const colors=["#3674B5","#A1E3F9","#E195AB","#E5989B","#9ACBD0","#E7FBB4","#8EB486","#89A8B2","#921A40","#FF4E88"]

    const button = document.getElementById("changeColorBtn");

    // Function to change the background color
function changeBackgroundColor() {
    // Randomly pick a color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Apply the color to the background
    document.body.style.backgroundColor = randomColor;
}

// Add an event listener to the button to change the background when clicked
button.addEventListener("click", changeBackgroundColor);
}

bgColorChange();
