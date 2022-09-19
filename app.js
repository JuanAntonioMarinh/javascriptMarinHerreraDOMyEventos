function calc (){

    let a = parseInt(document.querySelector("#value1").value);
    let b = parseInt(document.querySelector("#value2").value);
    let op = document.querySelector("#operator").value;
    let calculate;

    if(op == "Add"){
        calculate = a + b;
    } else if (op == "Minus"){
        calculate = a - b;
    } else if (op == "Div"){
        calculate = a / b;
    } else if (op = "Mul"){
        calculate = a * b;
    }

    document.querySelector("#result").innerHTML = calculate;
}