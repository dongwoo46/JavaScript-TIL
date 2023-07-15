const API_KEY =



function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("you live in",lat,lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
  fetch(url).then(response=>response.json()).then(data=>{
    console.log(data.name,data.weather[0].main);
  })
}

function onGeoError(){
  alert("can't find you, no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);