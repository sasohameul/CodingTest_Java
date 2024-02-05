const solution = (chicken) => {
  
  let service = 0;
  let cupon = chicken;

  while(cupon >= 10){
    let serviceChicken = Math.floor(cupon / 10);
    service += serviceChicken;
    cupon = serviceChicken + (cupon % 10);
  }

    return service;
}