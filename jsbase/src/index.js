const cities = ['Ciudad de México', 'Bogotá', 'Lima', 'Buenos Aires', 'Guadalajara'];

const randomString = () => {
  return cities[Math.floor(Math.random() * cities.length)];
};

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'))
    }
    resolve(str.split("").reverse().join(""))
  })
}

module.exports = randomString;