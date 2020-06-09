const utils = {};

utils.compose = (...functions) => (component) => {
  return functions.reduceRight((Wrapped, func) => func(Wrapped), component);
};

export default utils;
