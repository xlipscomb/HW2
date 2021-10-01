function force(){
    let m = parseFloat(document.getElementById("Mass").value);
    let acc = parseFloat(document.getElementById("Acceleration").value);
    if(m <=0 || acc <=0){
        alert ("Please input a correct number")
    }
    let ans1 = m * acc;
    document.getElementById("answer1").innerHTML = "The Force is " + ans1.toString() + "N";
}

function displacement(){  // check for right equation
    let v = parseFloat(document.getElementById("Velocity").value);
    let t = parseFloat(document.getElementById("Time").value);
    let a = parseFloat(document.getElementById("Acceleration2").value);
    if(v <=0 || t <=0 || a <= 0){
        alert ("Please input a correct number")
    }
    let ans2 = (v*t)-((1/2)*a*Math.pow(t,2));
    document.getElementById("answer2").innerHTML = "The Displacement is " + ans2.toString() + "m";
}

function quadratic(){
    let s1 = parseFloat(document.getElementById("Side1").value);
    let s2 = parseFloat(document.getElementById("Side2").value);
    let s3 = parseFloat(document.getElementById("Side3").value);
    if(s1 <=0 || s2 <=0 || s3 <= 0){
        alert ("Please input a correct number")
    }
    let pt1 = (-s2 + (Math.sqrt(Math.pow(s2,2))- 4 * s1 * s2) /(2 * s1));
    let pt2 = (-s2 - (Math.sqrt(Math.pow(s2,2)) - 4 * s1 * s2) / (2 * s1));
    document.getElementById("answer3").innerHTML = "The Answer is " + pt1.toString() + " and " + pt2.toString();

}

function annuity(){
    let pmt = parseFloat(document.getElementById("Amount").value);
    let ir = parseFloat(document.getElementById("Rate").value);
    let nop = parseFloat(document.getElementById("Periods").value);
    if(pmt <=0 || nop <= 0){
        alert ("Please input a correct number")
    }
    if(ir < 0 && ir >= 1){
        alert("The Intrest Rate you entered is either 0 a negative number or a number greater than 1 please chosose another number or change your percent into decimal form.")
    }
    let ans4 = pmt * (1 - (1 / (Math.pow((1 + ir) , nop))) / ir)
    document.getElementById("answer4").innerHTML = "The Present Value of Annuity is $ " + ans4.toString();
}