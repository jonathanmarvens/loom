var fs = require('fs');
var path = require('path');

/*
 * finds first template found in paths
 */

module.exports = function(template, env, callback) {
  var templatePath;
  for (var i = 0; i < env.paths.length; i += 1) {
    templatePath = path.relative(
      process.cwd(),
      env.paths[i]+'/templates/'+template
    );
    fs.exists(templatePath, function(exists) {
      if (exists) {
        callback(templatePath);
      } else if (i == env.paths.length - 1) {
        callback(false);
      }
    });
  }
};
