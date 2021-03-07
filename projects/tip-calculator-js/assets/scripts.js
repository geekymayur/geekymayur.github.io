var calcutetipbtn = document.getElementById("calcutetip");
var totaltip = document.getElementById("totaltip");
var showtip = document.getElementsByClassName("show-tip");
$(showtip).hide();
function calculate() {
    var totolBill = document.getElementById("totalAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numOfPeople = document.getElementById("totalPeople").value;
    $(showtip).hide();
    //validate input
    if (totolBill === "" || serviceQuality == 0) {
        alert("Please enter values");

    } else {
        //Check to see if this input is empty or less than or equal to 1
        if (numOfPeople === "" || numOfPeople <= 1) {
            numOfPeople = 1;
            //Calculate tip
            var total = (totolBill * serviceQuality) / numOfPeople;
            //round to two decimal places
            total = Math.round(total * 100) / 100;
            total = total.toFixed(2);
            totaltip.innerHTML = `₹ ${total}`;
            $(showtip).show();
        }
        else {
            //Calculate tip
            var total = (totolBill * serviceQuality) / numOfPeople;
            //round to two decimal places
            total = Math.round(total * 100) / 100;
            total = total.toFixed(2);
            totaltip.innerHTML = `₹ ${total} <span style="font-size:25px;">Each</span>`;
            $(showtip).show();
        }
    }
}
calcutetipbtn.addEventListener("click", calculate);


