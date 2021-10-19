const pricePerKM = 0.21; //in gbp £


let age = prompt("How old are you?");
let distance = prompt("How far are you travelling in km?");
let fare;

const discJunior = 0.2; // 20% discount for junior passengers under 18yrs old
const discSenior = 0.4; // 40% discount for senior passengers over 65 yrs old

// calculate the fare
fare = pricePerKM * distance;

if(age < 18){
    fare = fare - (fare* discJunior);
}

else if(age > 65){
    fare = fare - (fare* discSenior);
}

alert(`Your train fare is: ${fare}`);



function fareCalc(){
    let startPoint = document.getElementById("start-station").value;
    let endPoint = document.getElementById("end-station").value;
    let age = document.getElementById("age").value;
    let journeyText;
    let distance;
    let fare=0;
    let discount = 0;
    if(age < 18){
        discount = 0.2;
    }
    if(age > 65){
        discount = 0.4;
    }
    

    if(startPoint === "London"){
        switch(endPoint){
            case startPoint:
                alert("The destination you have chosen is the same as the starting station");
                break;
            case "Manchester":
                distance = 50;
                fare = (distance * pricePerKM) - ((distance * pricePerKM) * discount);
                journeyText = `${startPoint} to ${endPoint}: Distance: ${distance} Price per KM: ${pricePerKM} Discount: ${discount*100}% Fare: ${fare}`
                break;
            case "Birmingham":
                distance = 60;
                fare = (distance * pricePerKM) - ((distance * pricePerKM) * discount);
                journeyText = `${startPoint} to ${endPoint}: Distance: ${distance} Price per KM: ${pricePerKM} Discount: ${discount*100}% Fare: ${fare}`
                break;
            case "Leeds":
                distance = 80;
                fare = (distance * pricePerKM) - ((distance * pricePerKM) * discount);
                journeyText = `${startPoint} to ${endPoint}: Distance: ${distance} Price per KM: ${pricePerKM} Discount: ${discount*100}% Fare: ${fare}`
                break;
        }
    }

    if(startPoint === "Manchester"){
        switch(endPoint){
            case startPoint:
                alert("The destination you have chosen is the same as the starting station");
                break;
            case "London":
                distance = 50;
                fare = (distance * pricePerKM) - ((distance * pricePerKM) * discount);
                journeyText = `${startPoint} to ${endPoint}: Distance: ${distance} Price per KM: ${pricePerKM} Discount: ${discount*100}% Fare: ${fare}`
                break;
            case "Birmingham":
                distance = 10;
                fare = (distance * pricePerKM) - ((distance * pricePerKM) * discount);
                journeyText = `${startPoint} to ${endPoint}: Distance: ${distance} Price per KM: ${pricePerKM} Discount: ${discount*100}% Fare: ${fare}`
                break;
            case "Leeds":
                distance = 30;
                fare = (distance * pricePerKM) - ((distance * pricePerKM) * discount);
                journeyText = `${startPoint} to ${endPoint}: Distance: ${distance} Price per KM: ${pricePerKM} Discount: ${discount*100}% Fare: ${fare}`
                break;
        }
    }

    if(startPoint === "Birmingham"){
        switch(endPoint){
            case startPoint:
                alert("The destination you have chosen is the same as the starting station");
                break;
            case "London":
                distance = 60;
                fare = (distance * pricePerKM) - ((distance * pricePerKM) * discount);
                journeyText = `${startPoint} to ${endPoint}: Distance: ${distance} Price per KM: ${pricePerKM} Discount: ${discount*100}% Fare: ${fare}`
                break;
            case "Manchester":
                distance = 20;
                fare = (distance * pricePerKM) - ((distance * pricePerKM) * discount);
                journeyText = `${startPoint} to ${endPoint}: Distance: ${distance} Price per KM: ${pricePerKM} Discount: ${discount*100}% Fare: ${fare}`
                break;
            case "Leeds":
                distance = 20;
                fare = (distance * pricePerKM) - ((distance * pricePerKM) * discount);
                journeyText = `${startPoint} to ${endPoint}: Distance: ${distance} Price per KM: ${pricePerKM} Discount: ${discount*100}% Fare: ${fare}`
                break;
        }
    }

    if(startPoint === "Leeds"){
        switch(endPoint){
            case startPoint:
                alert("The destination you have chosen is the same as the starting station");
                break;
            case "London":
                distance = 80;
                fare = (distance * pricePerKM) - ((distance * pricePerKM) * discount);
                journeyText = `${startPoint} to ${endPoint}: Distance: ${distance} Price per KM: ${pricePerKM} Discount: ${discount*100}% Fare: ${fare}`
                break;
            case "Birmingham":
                distance = 10;
                fare = (distance * pricePerKM) - ((distance * pricePerKM) * discount);
                journeyText = `${startPoint} to ${endPoint}: Distance: ${distance} Price per KM: ${pricePerKM} Discount: ${discount*100}% Fare: ${fare}`
                break;
            case "Manchester":
                distance = 20;
                fare = (distance * pricePerKM) - ((distance * pricePerKM) * discount);
                journeyText = `${startPoint} to ${endPoint}: Distance: ${distance} Price per KM: ${pricePerKM} Discount: ${discount*100}% Fare: ${fare}`
                break;
        }
    }

    document.getElementById("output").innerHTML=journeyText;

    

    

}