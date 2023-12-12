// & Challenge #1
// In the constructor if there if the name is NOT 'Sammy', throw an error
class Learner {
  constructor(name, city, cohort) {
    if (name !== 'sammy') {
      throw new Error('dan, wow');
    }

    this.name = name;
    this.city = city;
    this.cohort = cohort;
  }
}
