const jd1 = [3, 5, 2, 12, 7];
const jd2 = [9, 16, 6, 8, 3];
const kd1 = [4, 1, 15, 8, 3];
const kd2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
  dogs.forEach((dog, indx) => {
    if (dog >= 3) {
      console.log(`Dog number ${indx + 1} is an adult and is ${dog} years old`);
    } else {
      console.log(`Dog number ${indx + 1} is a puppy and is ${dog} years old`);
    }
  });
};

checkDogs(jd1, kd1);
