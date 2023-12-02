// 2. City Taxes

// Create a function cityTaxes(). It should receive a city's name (string), population (number) and treasury (number) as arguments. You will need to set as properties of an object and return the object. In addition to the input parameters, the object must have a property taxRate with an initial value of 10, and three methods for managing the city:

// · collectTaxes() - increase the treasury by population * taxRate

// · applyGrowth(percentage) - increase the population by the given percentage

// · applyRecession(percentage) - Decrease the treasury by the given percentage

// Round down the values after each calculation.

// Input

// Your solution will receive three valid parameters. The methods that expect parameters will be tested with valid input.

// Output

// Return an object as described above. The methods of the object modify the object and don’t return anything.
function cityTaxes(name: string, population: number, treasury: number) {
  return {
    name,
    population,
    treasury,
    taxRate: 10,

    collectTaxes() {
      this.treasury += Math.floor(this.population * this.taxRate);
    },

    applyGrowth(percentage: number) {
      this.population = Math.floor(this.population * (1 + percentage / 100));
    },

    applyRecession(percentage: number) {
      this.treasury = Math.floor(this.treasury * (1 - percentage / 100));
    },
  };
}

//*************
// TEST INPUT 1

// const city = cityTaxes('Tortuga', 7000, 15000);

// console.log(city);

//*************
// TEST INPUT 2

const city = cityTaxes("Tortuga", 7000, 15000);

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population);
