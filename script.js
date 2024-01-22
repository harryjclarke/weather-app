let weatherForm = document.getElementById('getWeather');

const fetchWeather = async (city) => {
  const output = document.querySelector('.output');
  const errorMsg = document.getElementById('error');
  errorMsg.innerHTML = '';
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=96c39487c1cf443eaef194818242201&q=${city}`
    );
    const weather = await response.json();
    output.style.display = 'block'
    document.getElementById('location').innerHTML = `${weather.location.name}, ${weather.location.country}`
    document.getElementById('time').innerHTML = `${weather.location.localtime}`
    document.getElementById('temp').innerHTML = `${weather.current.temp_c}°C` 
    document.getElementById('temp-feels').innerHTML = `Feels like ${weather.current.feelslike_c}°C`
    document.getElementById('humidity').innerHTML = `${weather.current.humidity}` 
    document.getElementById('precipitation').innerHTML = `${weather.current.precip_mm}` 
    document.getElementById('wind').innerHTML = `${weather.current.wind_mph} mph` 
  } catch (error) {
      errorMsg.innerHTML = 'Please enter a valid city'
      output.style.display = 'none'
    console.log(error);
  }
};

weatherForm.addEventListener('submit', (e) => {
  let city = document.getElementById('city').value;
  fetchWeather(city);
  e.preventDefault();
});
