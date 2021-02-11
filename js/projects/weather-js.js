function profile() {
    // let greet = document.getElementById("greet");
    // let name = prompt("Hey, I am Mayur and You ?");
    // if (name == "" || name == null) {
    //     greet.innerHTML = `Welcome User`;
    // } else {
    //     greet.innerHTML = `Welcome ${name}`;
    // }
    // hide or show display box 
    // $("#display-box-1").hide();
    // $("#showForecast").hide();
    // $("#showForecast").css("display", "none");

}

// Calling profile function for greeting user
profile();

let checkbutton = document.getElementById("check-button");
let getcityname = document.getElementById("cityname");
let weatherImage = document.getElementById("weatherImage");
let showTemp = document.getElementById("showTemp");
let showCityName = document.getElementById("cityName");
let showDiscription = document.getElementById("showDiscription");
const apikey = "a02caaedb7f5180cd72e9ece23c352fa";
const forecastAPIKEY = "71c02a27bd54ffc432aa062fdc8fc4dc";
var showForecast = document.getElementById("showForecast");
// FORECAST DOM ID
// day 1
var day1Forecastdate = document.getElementById("day1Forecastdate");
var day1Forecastsky = document.getElementById("day1Forecastsky");
var day1Forecasticon = document.getElementById("day1Forecasticon");
var day1Forecasttemp = document.getElementById("day1Forecasttemp");
// day 2
var day2Forecastdate = document.getElementById("day2Forecastdate");
var day2Forecastsky = document.getElementById("day2Forecastsky");
var day2Forecasticon = document.getElementById("day2Forecasticon");
var day2Forecasttemp = document.getElementById("day2Forecasttemp");
// day 3
var day3Forecastdate = document.getElementById("day3forecastdate");
var day3Forecastsky = document.getElementById("day3forecastsky");
var day3Forecasticon = document.getElementById("day3forecasticon");
var day3Forecasttemp = document.getElementById("day3forecasttemp");
// day 4
var day4Forecastdate = document.getElementById("day4forecastdate");
var day4Forecastsky = document.getElementById("day4forecastsky");
var day4Forecasticon = document.getElementById("day4forecasticon");
var day4Forecasttemp = document.getElementById("day4forecasttemp");
// day 5
var day5Forecastdate = document.getElementById("day5forecastdate");
var day5Forecastsky = document.getElementById("day5forecastsky");
var day5Forecasticon = document.getElementById("day5forecasticon");
var day5Forecasttemp = document.getElementById("day5forecasttemp");
// day 6
var day6Forecastdate = document.getElementById("day6forecastdate");
var day6Forecastsky = document.getElementById("day6forecastsky");
var day6Forecasticon = document.getElementById("day6forecasticon");
var day6Forecasttemp = document.getElementById("day6forecasttemp");
// day 7
var day7Forecastdate = document.getElementById("day7forecastdate");
var day7Forecastsky = document.getElementById("day7forecastsky");
var day7Forecasticon = document.getElementById("day7forecasticon");
var day7Forecasttemp = document.getElementById("day7forecasttemp");



// get forecast weather location
// https://api.openweathermap.org/data/2.5/forecast?q=London,uk&cnt=4&APPID=71c02a27bd54ffc432aa062fdc8fc4dc

// this function will run after clicking on check button 
let getWeather = async (event) => {
    event.preventDefault();
    let cityname = getcityname.value;
    if (cityname == "") {
        alert("Enter City name");
    }
    else {

        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=a02caaedb7f5180cd72e9ece23c352fa`;
            let response = await fetch(url);
            let data = await response.json();
            // console.log(url);
            // console.log(data);
            // $("#display-box-1").show().slideDown();




            let celcius = data.main.temp;
            // console.log(typeof celcius)
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
            $("#display-box-1").hide();
            $("#showForecast").hide();
            alert("Please Check Your City Name and Try Again.");
            // console.log(error);
        }
        try {
            let apiurl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&units=metric&cnt=7&APPID=71c02a27bd54ffc432aa062fdc8fc4dc`;
            let response1 = await fetch(apiurl);
            let data1 = await response1.json();
            console.log(data1.list.length);

            // // day1
            var day1Date = new Date(data1.list[0].dt * 1000);
            console.log(`unix date 1 ${data1.list[0].dt}`);
            const options = { weekday: 'short', month: 'short', day: 'numeric' };
            day1Forecastdate.innerHTML = `${day1Date.toLocaleDateString(undefined, options)}`;
            console.log(`Day 1 : ${day1Date.toLocaleDateString(undefined, options)}`)
            // day1Forecastdate.innerHTML = `${day1Date.getUTCDate()}/${day1Date.getUTCMonth()}/${day1Date.getUTCFullYear()}`;
            day1Forecastsky.innerHTML = `${data1.list[0].weather[0].main}`;
            day1Forecasticon.src = `http://openweathermap.org/img/wn/${data1.list[0].weather[0].icon}@2x.png`;
            // day1Forecasttemp.innerHTML = `${data1.list[0].main.temp}°C`;
            day1Forecasttemp.innerHTML = `${data1.list[0].main.temp.toFixed(0)}°C`;

            // day2
            var day2Date = new Date(data1.list[1].dt * 1000);
            console.log(`unix date 2 ${data1.list[1].dt}`);

            day2Forecastdate.innerHTML = `${day2Date.toLocaleDateString(undefined, options)}`;
            console.log(`Day 2 : ${day2Date.toLocaleDateString(undefined, options)}`);

            day2Forecastsky.innerHTML = `${data1.list[1].weather[0].main}`;
            day2Forecasticon.src = `http://openweathermap.org/img/wn/${data1.list[1].weather[0].icon}@2x.png`;
            // day2Forecasttemp.innerHTML = `${data1.list[1].main.temp}°C`;
            day2Forecasttemp.innerHTML = `${data1.list[1].main.temp.toFixed(0)}°C`;

            // day3
            var day3Date = new Date(data1.list[2].dt * 1000);
            console.log(`unix date 3 ${data1.list[2].dt}`);
            console.log(`Day 3 : ${day3Date.toLocaleDateString(undefined, options)}`);

            day3Forecastdate.innerHTML = `${day3Date.toLocaleDateString(undefined, options)}`;

            day3Forecastsky.innerHTML = `${data1.list[2].weather[0].main}`;
            day3Forecasticon.src = `http://openweathermap.org/img/wn/${data1.list[2].weather[0].icon}@2x.png`;
            // day3Forecasttemp.innerHTML = `${data1.list[1].main.temp}°C`;
            day3Forecasttemp.innerHTML = `${data1.list[2].main.temp.toFixed(0)}°C`;


            // day4
            var day4Date = new Date(data1.list[3].dt * 1000);
            console.log(`unix date 4 ${data1.list[3].dt}`);
            console.log(`Day 4 : ${day4Date.toLocaleDateString(undefined, options)}`);

            day4Forecastdate.innerHTML = `${day4Date.toLocaleDateString(undefined, options)}`;

            day4Forecastsky.innerHTML = `${data1.list[3].weather[0].main}`;
            day4Forecasticon.src = `http://openweathermap.org/img/wn/${data1.list[3].weather[0].icon}@2x.png`;
            // day4Forecasttemp.innerHTML = `${data1.list[1].main.temp}°C`;
            day4Forecasttemp.innerHTML = `${data1.list[3].main.temp.toFixed(0)}°C`;

            // day5
            var day5Date = new Date(data1.list[4].dt * 1000);
            console.log(`unix date 5 ${data1.list[4].dt}`);
            console.log(`Day 5 : ${day5Date.toLocaleDateString(undefined, options)}`);

            day5Forecastdate.innerHTML = `${day5Date.toLocaleDateString(undefined, options)}`;

            day5Forecastsky.innerHTML = `${data1.list[4].weather[0].main}`;
            day5Forecasticon.src = `http://openweathermap.org/img/wn/${data1.list[4].weather[0].icon}@2x.png`;
            // day5Forecasttemp.innerHTML = `${data1.list[1].main.temp}°C`;
            day5Forecasttemp.innerHTML = `${data1.list[4].main.temp.toFixed(0)}°C`;


            // day6
            var day6Date = new Date(data1.list[5].dt * 1000);
            console.log(`unix date 6 ${data1.list[5].dt}`);
            console.log(`Day 6 : ${day6Date.toLocaleDateString(undefined, options)}`);

            day6Forecastdate.innerHTML = `${day6Date.toLocaleDateString(undefined, options)}`;

            day6Forecastsky.innerHTML = `${data1.list[5].weather[0].main}`;
            day6Forecasticon.src = `http://openweathermap.org/img/wn/${data1.list[5].weather[0].icon}@2x.png`;
            // day6Forecasttemp.innerHTML = `${data1.list[1].main.temp}°C`;
            day6Forecasttemp.innerHTML = `${data1.list[5].main.temp.toFixed(0)}°C`;

            // day7
            var day7Date = new Date(data1.list[6].dt * 1000);
            console.log(`unix date 7 ${data1.list[6].dt}`);
            console.log(`Day 7 : ${day7Date.toLocaleDateString(undefined, options)}`);

            day7Forecastdate.innerHTML = `${day7Date.toLocaleDateString(undefined, options)}`;

            day7Forecastsky.innerHTML = `${data1.list[6].weather[0].main}`;
            day7Forecasticon.src = `http://openweathermap.org/img/wn/${data1.list[6].weather[0].icon}@2x.png`;
            // day7Forecasttemp.innerHTML = `${data1.list[1].main.temp}°C`;
            day7Forecasttemp.innerHTML = `${data1.list[6].main.temp.toFixed(0)}°C`;


        } catch (error) {
            // console.log("Error generated in forecast");
        }
    }
};


checkbutton.addEventListener("click", getWeather);



// Current // api.openweathermap.org/data/2.5/weather?q=goa&units=imperial&appid=a02caaedb7f5180cd72e9ece23c352fa
// Forecast // http://api.openweathermap.org/data/2.5/forecast?q=London,uk&cnt=4&APPID=71c02a27bd54ffc432aa062fdc8fc4dc