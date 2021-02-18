var notification = document.getElementById("notification");
var notificationbox = document.getElementById("notiBox");
function autorun() {
    // hide or show display box 
    $("#display-box-1").hide();
    $(".dev-info").hide();
    $(".box-1").css("margin-top", "250px");
    $(notificationbox).hide();
}

// Calling profile function for greeting user
autorun();

let checkbutton = document.getElementById("check-button");
let getcityname = document.getElementById("cityname");
let weatherImage = document.getElementById("weatherImage");
let showTemp = document.getElementById("showTemp");
let showCityName = document.getElementById("cityName");
let showDiscription = document.getElementById("showDiscription");
const apikey = "a02caaedb7f5180cd72e9ece23c352fa";
const forecastAPIKEY = "71c02a27bd54ffc432aa062fdc8fc4dc";
var showForecast = document.getElementById("showForecast");

// this function will run after clicking on check button 
let getWeather = async (event) => {
    event.preventDefault();
    let cityname = getcityname.value;
    if (cityname == "") {
        // alert("Enter City name");
        // $(".box-1").css("margin-top", "250px");

        $(notificationbox).show();
        $("#display-box-1").hide();
        $(".dev-info").hide();
        notification.innerHTML = `Please Enter City Name.`;

        let hidebox = function () {
            var xyz = $(notificationbox).hide();
            setInterval(xyz, 3000);
        };
        clearInterval(hidebox);

    }
    else {

        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=a02caaedb7f5180cd72e9ece23c352fa`;
            let response = await fetch(url);
            let data = await response.json();
            // console.log(url);
            // console.log(data);
            $(notificationbox).hide();

            $(".box-1").css("margin-top", "10px").animate()
            $("#display-box-1").show();
            $(".dev-info").show();

            let celcius = data.main.temp;
            if (celcius[1] == 0) {
                showTemp.innerHTML = `0°C`;
            } else {
                showTemp.innerHTML = `${celcius.toFixed(0)}°C`;
            }
            if (data.sys.country == undefined) {
                showCityName.innerHTML = `${data.name}`;
            } else {
                showCityName.innerHTML = `${data.name}, ${data.sys.country}`;
            }
            weatherImage.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
            showDiscription.innerHTML = `${data.weather[0].description}`;
            $("#sky").text(data.weather[0].main);
            let feelslike = data.main.feels_like;
            let mintemp = data.main.temp_min;
            let maxtemp = data.main.temp_max;

            $("#feelsLike").text(feelslike.toFixed(0) + "°C");
            $("#minTemp").text(mintemp.toFixed(0) + "°C");
            $("#maxTemp").text(maxtemp.toFixed(0) + "°C");
            $("#humidity").text(data.main.humidity + " %");
            $("#windspeed").text(data.wind.speed + " meter/sec");
        } catch (error) {
            // $(".box-1").css("margin-top", "250px");
            $("#display-box-1").hide();
            $(".dev-info").hide();
            $(notificationbox).show();

            // alert("Please Check Your City Name and Try Again.");
            notification.innerHTML = `Please Check you City name and try again.`;
        }

    }
};


checkbutton.addEventListener("click", getWeather);



// Current // api.openweathermap.org/data/2.5/weather?q=goa&units=imperial&appid=a02caaedb7f5180cd72e9ece23c352fa
// Forecast // http://api.openweathermap.org/data/2.5/forecast?q=London,uk&cnt=4&APPID=71c02a27bd54ffc432aa062fdc8fc4dc