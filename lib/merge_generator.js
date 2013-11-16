var findGenerator = require('./find_generator');
var genericGenerator = require('./generic_generator');

/*
 * Finds the generator and merges with the generic generator.
 */

module.exports = function(env, callback) {
  findGenerator(env, function(generator) {
    if (generator) {
      merge(generator);
    } else {
      generator = genericGenerator;
    }
    callback(generator);
  });
};

function merge(generator) {
  for (var method in genericGenerator) {
    if (generator[method]) continue;
    generator[method] = genericGenerator[method];
  }
}
