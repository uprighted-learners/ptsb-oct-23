class Manufacturer {
  id;
  financials = [];
  founded;
  founder;
  name;
  services = [];
  totalEmployees;
  type;

  constructor() {
    // things
  }
}

class Model {
  manufacturer;
  name;

  constructor() {
    // things
  }
}

class Submodel extends Model {
  #pricing = {};
  constructor() {
    // things
  }
}

class Feature {
  id;
  submodelId;
  modelId;
}

