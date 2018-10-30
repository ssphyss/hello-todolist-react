const rewireSass = require('react-app-rewire-scss');

/* scss */
module.exports = function override(config, env) {
    config = rewireSass(config, env);
    return config;
};
