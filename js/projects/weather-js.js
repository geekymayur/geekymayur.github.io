function profile() {
    let greet = document.getElementById("greet");
    let name = prompt("Hey, I am Mayur and You ?");
    if (name == "" || name == null) {
        greet.innerHTML = `Welcome User`;
    } else if (name == "anshu" || name == "Anshu" || name == "ANSHU") {
        alert("I Love You ")
    }
    else {
        greet.innerHTML = `Welcome ${name}`;
    }

}
profile();

let checkbutton = document.getElementById("check-button");
let getcityname = document.getElementById("cityname");

let getWeather = async (event) => {
    event.preventDefault();
    let cityname = getcityname.value;
    if (cityname == "") {
        alert("Enter City name");
    }
    else {
        try {
            let url = `api.openweathermap.org/data/2.5/weather?q=${cityname}&units=imperial&appid=a02caaedb7f5180cd72e9ece23c352fa`;
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
        } catch (error) {
            alert("Please Check Your City Name and Check Again.");
            console.log(error);
        }
    }
};
checkbutton.addEventListener("click", getWeather);



// Current // api.openweathermap.org/data/2.5/weather?q=goa&units=imperial&appid=a02caaedb7f5180cd72e9ece23c352fa
// Forecast // http://api.openweathermap.org/data/2.5/forecast?q=London,uk&cnt=4&APPID=71c02a27bd54ffc432aa062fdc8fc4dc