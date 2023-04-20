const autoBrands = ["Audi", "BMW", "Tesla", "Nissan", "Peugeot"];

for (i = 0; i < autoBrands.length; i++) {
  console.log(autoBrands[i]);
}

for (let brand of autoBrands) {
  console.log(brand);
}
autoBrands.forEach(function (brand, i) {
  console.log(`${brand} => ${i}`);
});
autoBrands.forEach(printAutoBrand);

function printAutoBrand(brand, i) {
  console.log(`${brand} => ${i}`);
}

autoBrands.forEach((brand, i) => console.log(`${brand} => ${i}`));
