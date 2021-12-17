//Full Website
function calculate() {

    var websiteCost = 250.0;
    var mainLow = 6.00;
    var mainMed = 12.00;
    var mainHigh = 25.00;
    var discount = 0.85;

    var employeeCost;

    var mainRes;

    var totalCost;
    var costPerEmployee;
    var deposit;
    var monthlyPayment;

    //Content Creation
    if (document.getElementById("contentCreation").value == "Yes") {
        discount = 0.85;
        //Level of Maintanence
        if (document.getElementById("maintain").value == "0-10") {
            totalCost = 1800 * discount;
            costPerEmployee = (totalCost / 12) / 10;
        }
        if (document.getElementById("maintain").value == "11-25") {
            totalCost = 3000 * discount;
            costPerEmployee = (totalCost / 12) / 25;
        }
        if (document.getElementById("maintain").value == "26-50") {
            totalCost = 4200 * discount;
            costPerEmployee = (totalCost / 12) / 50;
        }
        if (document.getElementById("maintain").value == "51-100") {
            totalCost = 5400 * discount;
            costPerEmployee = (totalCost / 12) / 100;
        }
        if (document.getElementById("maintain").value == "101-250") {
            totalCost = 9600 * discount;
            costPerEmployee = (totalCost / 12) / 250;
        }
        if (document.getElementById("maintain").value == "251-500") {
            totalCost = 14400 * discount;
            costPerEmployee = (totalCost / 12) / 500;
        }
        if (document.getElementById("maintain").value == "501-750") {
            totalCost = 18000 * discount;
            costPerEmployee = (totalCost / 12) / 750;
        }
        if (document.getElementById("maintain").value == "751-1000") {
            totalCost = 22800 * discount;
            costPerEmployee = (totalCost / 12) / 1000;
        }
        if (document.getElementById("maintain").value == "1001-2500") {
            totalCost = 40800 * discount;
            costPerEmployee = (totalCost / 12) / 2500;
        }
        if (document.getElementById("maintain").value == "2501-5000") {
            totalCost = 54000 * discount;
            costPerEmployee = (totalCost / 12) / 5000;
        }
        } else {
            discount = 0;
        if (document.getElementById("maintain").value == "0-10") {
            totalCost = 1800;
            costPerEmployee = (totalCost / 12) / 10;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + monthlyPayment;
        }
        if (document.getElementById("maintain").value == "11-25") {
            totalCost = 3000;
            costPerEmployee = (totalCost / 12) / 25;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + monthlyPayment;
        }
        if (document.getElementById("maintain").value == "26-50") {
            totalCost = 4200;
            costPerEmployee = (totalCost / 12) / 50;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + monthlyPayment;
        }
        if (document.getElementById("maintain").value == "51-100") {
            totalCost = 5400;
            costPerEmployee = (totalCost / 12) / 100;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + monthlyPayment;
        }
        if (document.getElementById("maintain").value == "101-250") {
            totalCost = 9600;
            costPerEmployee = (totalCost / 12) / 250;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + monthlyPayment;
        }
        if (document.getElementById("maintain").value == "251-500") {
            totalCost = 14400;
            costPerEmployee = (totalCost / 12) / 500;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + monthlyPayment;
        }
        if (document.getElementById("maintain").value == "501-750") {
            totalCost = 18000;
            costPerEmployee = (totalCost / 12) / 750;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + monthlyPayment;
        }
        if (document.getElementById("maintain").value == "751-1000") {
            totalCost = 22800;
            costPerEmployee = (totalCost / 12) / 1000;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + monthlyPayment;
        }
        if (document.getElementById("maintain").value == "1001-2500") {
            totalCost = 40800;
            costPerEmployee = (totalCost / 12) / 2500;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + monthlyPayment;
        }
        if (document.getElementById("maintain").value == "2501-5000") {
            totalCost = 54000;
            costPerEmployee = (totalCost / 12) / 5000;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + monthlyPayment;
        }
    }

    document.getElementById("initResult").innerHTML = "Total Cost: £ " + totalCost;
    document.getElementById("resMonthly").innerHTML = "Cost Per Employee Per Month: £" + costPerEmployee;
    
}
