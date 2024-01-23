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
    output.style.display = 'block';
    document.getElementById(
      'location'
    ).innerHTML = `${weather.location.name}, ${weather.location.country}`;
    document.getElementById('time').innerHTML = `${weather.location.localtime}`;
    document.getElementById('temp').innerHTML = `${weather.current.temp_c}°C`;
    document.getElementById(
      'temp-feels'
    ).innerHTML = `Feels like ${weather.current.feelslike_c}°C`;
    document.getElementById(
      'condition'
    ).innerHTML = `${weather.current.condition.text}`;
    document.getElementById(
      'humidity'
    ).innerHTML = `${weather.current.humidity}% Humidity`;
    document.getElementById(
      'precipitation'
    ).innerHTML = `${weather.current.precip_mm}% Precipitation`;
    document.getElementById(
      'wind'
    ).innerHTML = `${weather.current.wind_mph} MPH Wind`;
  } catch (error) {
    errorMsg.innerHTML = 'Please enter a valid city';
    output.style.display = 'none';
    console.log(error);
  }
};

const fetchImage = async (city) => {
  let background = document.getElementById('background')
  const response = await fetch(`https://api.unsplash.com/search/photos?client_id=1sEKaTdZyYd1zfu-Y8ynzXa11gckBZbOD-UxE_qlCR8&query=${city}`)
  const image = await response.json();
  background.style.backgroundImage = `url('${image.results[0].urls.full}'`
  background.style.backgroundSize = 'cover'
}

const defaultLocation = () => {
  document.getElementById('city').value = 'New York';
  document.getElementById('submit').click();
}

weatherForm.addEventListener('submit', (e) => {
  let city = document.getElementById('city').value;
  fetchWeather(city);
  fetchImage(city)
  e.preventDefault();
});
