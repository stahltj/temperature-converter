function fahrenheitToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * 1.8;
  return celsius;
}
function describeTemperature(celsius) {
  const message = "";
  if (celsius < 0) {
    message = "very cold";
  } else if (celsius < 20) {
    message = "cold";
  } else if (celsius < 30) {
    message = "warm";
  } else if (celsius < 40) {
    message = "hot";
  }
  return message`${fahrenheit} °f is ${celsius} °c feels ${message}`;
}

const fahrenheit = prompt("Please enter a temperature in Fahrenheit");
const message = describeTemperature(fahrenheit);
alert(message);
