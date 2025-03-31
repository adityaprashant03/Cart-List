let placeOrder=document.getElementById("placeOrder");

let checkData1=document.getElementById("Data-check1");
let checkData2=document.getElementById("Data-check2");
let checkData3=document.getElementById("Data-check3");
let checkData4=document.getElementById("Data-check4");
let checkData5=document.getElementById("Data-check5");
let checkData6=document.getElementById("Data-check6");

function place_Order() {
    if(checkData1.value&&checkData2.value&&checkData3.value&&checkData4.value&&checkData5.value&&checkData6.value){
        alert("Order Placed Successfully");
        window.location.href="index.html"
    }
    else{
        alert("Please fill all the required fields");
    }
}

placeOrder.addEventListener("click",place_Order);