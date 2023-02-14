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
            document.getElementById("deposit").innerHTML = "";
            document.getElementById("monthlyPayment").innerHTML = "";
        }
        if (document.getElementById("maintain").value == "11-25") {
            totalCost = 3000 * discount;
            costPerEmployee = (totalCost / 12) / 25;
            document.getElementById("deposit").innerHTML = "";
            document.getElementById("monthlyPayment").innerHTML = "";
        }
        if (document.getElementById("maintain").value == "26-50") {
            totalCost = 4200 * discount;
            costPerEmployee = (totalCost / 12) / 50;
            document.getElementById("deposit").innerHTML = "";
            document.getElementById("monthlyPayment").innerHTML = "";
        }
        if (document.getElementById("maintain").value == "51-100") {
            totalCost = 5400 * discount;
            costPerEmployee = (totalCost / 12) / 100;
            document.getElementById("deposit").innerHTML = "";
            document.getElementById("monthlyPayment").innerHTML = "";
        }
        if (document.getElementById("maintain").value == "101-150") {
            totalCost = 5400 * discount;
            costPerEmployee = (totalCost / 12) / 150;
            document.getElementById("deposit").innerHTML = "";
            document.getElementById("monthlyPayment").innerHTML = "";
        }
        if (document.getElementById("maintain").value == "151-250") {
            totalCost = 9600 * discount;
            costPerEmployee = (totalCost / 12) / 250;
            document.getElementById("deposit").innerHTML = "";
            document.getElementById("monthlyPayment").innerHTML = "";
        }
        if (document.getElementById("maintain").value == "251-500") {
            totalCost = 14400 * discount;
            costPerEmployee = (totalCost / 12) / 500;
            document.getElementById("deposit").innerHTML = "";
            document.getElementById("monthlyPayment").innerHTML = "";
        }
        if (document.getElementById("maintain").value == "501-750") {
            totalCost = 18000 * discount;
            costPerEmployee = (totalCost / 12) / 750;
            document.getElementById("deposit").innerHTML = "";
            document.getElementById("monthlyPayment").innerHTML = "";
        }
        if (document.getElementById("maintain").value == "751-875") {
            totalCost = 21000 * discount;
            costPerEmployee = (totalCost / 12) / 875;
            document.getElementById("deposit").innerHTML = "";
            document.getElementById("monthlyPayment").innerHTML = "";
        }
        if (document.getElementById("maintain").value == "876-1000") {
            totalCost = 22800 * discount;
            costPerEmployee = (totalCost / 12) / 1000;
            document.getElementById("deposit").innerHTML = "";
            document.getElementById("monthlyPayment").innerHTML = "";
        }
        if (document.getElementById("maintain").value == "1001-1500") {
            totalCost = 26800 * discount;
            costPerEmployee = (totalCost / 12) / 1500;
            document.getElementById("deposit").innerHTML = "";
            document.getElementById("monthlyPayment").innerHTML = "";
        }
        if (document.getElementById("maintain").value == "1501-2000") {
            totalCost = 32000 * discount;
            costPerEmployee = (totalCost / 12) / 2000;
            document.getElementById("deposit").innerHTML = "";
            document.getElementById("monthlyPayment").innerHTML = "";
        }
        if (document.getElementById("maintain").value == "2001-2500") {
            totalCost = 40800 * discount;
            costPerEmployee = (totalCost / 12) / 2500;
            document.getElementById("deposit").innerHTML = "";
            document.getElementById("monthlyPayment").innerHTML = "";
        }
        if (document.getElementById("maintain").value == "2501-3000") {
            totalCost = 44000 * discount;
            costPerEmployee = (totalCost / 12) / 3000;
            document.getElementById("deposit").innerHTML = "";
            document.getElementById("monthlyPayment").innerHTML = "";
        }
        if (document.getElementById("maintain").value == "3001-3500") {
            totalCost = 46000 * discount;
            costPerEmployee = (totalCost / 12) / 3500;
            document.getElementById("deposit").innerHTML = "";
            document.getElementById("monthlyPayment").innerHTML = "";
        }
        if (document.getElementById("maintain").value == "3501-4000") {
            totalCost = 48000 * discount;
            costPerEmployee = (totalCost / 12) / 4000;
            document.getElementById("deposit").innerHTML = "";
            document.getElementById("monthlyPayment").innerHTML = "";
        }
        if (document.getElementById("maintain").value == "4001-4500") {
            totalCost = 51000 * discount;
            costPerEmployee = (totalCost / 12) / 4500;
            document.getElementById("deposit").innerHTML = "";
            document.getElementById("monthlyPayment").innerHTML = "";
        }
        if (document.getElementById("maintain").value == "4501-5000") {
            totalCost = 54000 * discount;
            costPerEmployee = (totalCost / 12) / 5000;
            document.getElementById("deposit").innerHTML = "";
            document.getElementById("monthlyPayment").innerHTML = "";
        }
        } else {
            discount = 0;
        if (document.getElementById("maintain").value == "0-10") {
            totalCost = 1800;
            costPerEmployee = (totalCost / 12) / 10;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);
        }
        if (document.getElementById("maintain").value == "11-25") {
            totalCost = 3000;
            costPerEmployee = (totalCost / 12) / 25;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);;
        }
        if (document.getElementById("maintain").value == "26-50") {
            totalCost = 4200;
            costPerEmployee = (totalCost / 12) / 50;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);;
        }
        if (document.getElementById("maintain").value == "51-100") {
            totalCost = 5400;
            costPerEmployee = (totalCost / 12) / 100;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);;
        }
        if (document.getElementById("maintain").value == "101-150") {
            totalCost = 7200;
            costPerEmployee = (totalCost / 12) / 150;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);;
        }
        if (document.getElementById("maintain").value == "151-250") {
            totalCost = 9600;
            costPerEmployee = (totalCost / 12) / 250;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);;
        }
        if (document.getElementById("maintain").value == "251-500") {
            totalCost = 14400;
            costPerEmployee = (totalCost / 12) / 500;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);;
        }
        if (document.getElementById("maintain").value == "501-750") {
            totalCost = 18000;
            costPerEmployee = (totalCost / 12) / 750;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);;
        }
        if (document.getElementById("maintain").value == "751-875") {
            totalCost = 21000;
            costPerEmployee = (totalCost / 12) / 875;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);;
        }
        if (document.getElementById("maintain").value == "876-1000") {
            totalCost = 22800;
            costPerEmployee = (totalCost / 12) / 1000;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);;
        }
        if (document.getElementById("maintain").value == "1001-1500") {
            totalCost = 26800;
            costPerEmployee = (totalCost / 12) / 1500;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);;
        }
        if (document.getElementById("maintain").value == "1501-2000") {
            totalCost = 32000;
            costPerEmployee = (totalCost / 12) / 2000;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);;
        }
        if (document.getElementById("maintain").value == "2001-2500") {
            totalCost = 40800;
            costPerEmployee = (totalCost / 12) / 2500;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);;
        }
        if (document.getElementById("maintain").value == "2501-3000") {
            totalCost = 44000;
            costPerEmployee = (totalCost / 12) / 3000;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);;
        }
        if (document.getElementById("maintain").value == "3001-3500") {
            totalCost = 46000;
            costPerEmployee = (totalCost / 12) / 3500;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);;
        }
        if (document.getElementById("maintain").value == "3501-4000") {
            totalCost = 48000;
            costPerEmployee = (totalCost / 12) / 4000;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);;
        }
        if (document.getElementById("maintain").value == "4001-4500") {
            totalCost = 51000;
            costPerEmployee = (totalCost / 12) / 4500;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);;
        }
        if (document.getElementById("maintain").value == "4501-5000") {
            totalCost = 54000;
            costPerEmployee = (totalCost / 12) / 5000;
            deposit = totalCost / 2;
            monthlyPayment = deposit / 11;
            document.getElementById("deposit").innerHTML = "Deposit: £" + deposit;
            document.getElementById("monthlyPayment").innerHTML = "11 Monthly Installments Of: £" + (Math.round(monthlyPayment * 100) / 100).toFixed(2);;
        }
    }

    document.getElementById("initResult").innerHTML = "Total Cost: £ " + totalCost;
    document.getElementById("resMonthly").innerHTML = "Cost Per Employee Per Month: £" + costPerEmployee;
    
}
