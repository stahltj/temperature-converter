/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {number} f temperature in °F
 * @returns {number} temperature in °C
 */
function convertToCelsius(f) {
  return (f - 32) * (5 / 9);
}

/**
 * | Temperature (°C) | Description |
 * | ---------------- | ----------- |
 * | < 0              | "very cold" |
 * | < 20             | "cold"      |
 * | < 30             | "warm"      |
 * | < 40             | "hot"       |
 * | >= 40            | "very hot"  |
 *
 * @param {number} f temperature in °F
 * @returns {string} the corresponding description from the table above
 */
function describeTemperature(f) {
  const c = convertToCelsius(f);

  let description = "";

  if (c < 0) {
    description = "very cold";
  } else if (c < 20) {
    description = "cold";
  } else if (c < 30) {
    description = "warm";
  } else if (c < 40) {
    description = "hot";
  } else {
    description = "very hot";
  }

  return `${f}°F is ${c}°C. That is ${description}.`;
}

const f = prompt("Please enter a temperature in Fahrenheit");
const description = describeTemperature(f);
alert(description);
