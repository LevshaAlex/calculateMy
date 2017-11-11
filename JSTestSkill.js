//
//
//
//
//
function  sumNumber() {

    let firstNumber=document.getElementById("fieldID1").value ;
    let secondNumber=document.getElementById("fieldID2").value ;

    firstNumber=Number(firstNumber);
    secondNumber=+secondNumber;
    var showReslt= document.getElementById('resalt');
    showReslt.innerHTML=firstNumber+secondNumber;


}

function  subTract() {

    let firstNumber=document.getElementById("fieldID1").value ;
    let secondNumber=document.getElementById("fieldID2").value ;

    firstNumber=Number(firstNumber);
    secondNumber=+secondNumber;
    var showResalt= document.getElementById("resalt");
    showResalt.innerHTML=firstNumber-secondNumber;

}

function  multiply() {

    let firstNumber=document.getElementById("fieldID1").value ;
    let secondNumber=document.getElementById("fieldID2").value ;

    firstNumber=Number(firstNumber);
    secondNumber=Number(secondNumber);


    var showResalt = document.getElementById('resalt');
    showResalt.innerHTML =firstNumber * secondNumber

}







function  devide() {


    let firstNumber=document.getElementById("fieldID1").value ;
    let secondNumber=document.getElementById("fieldID2").value ;

    firstNumber=Number(firstNumber);
    secondNumber=+secondNumber;


    var showResalt = document.getElementById('resalt');
    showResalt.innerHTML =firstNumber / secondNumber

}


/