// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
// module.exports = {
//   googleClientID:
//     '868103800816-51caumuhdmg23ick93c7tmle0tie5aqo.apps.googleusercontent.com',
//   googleClientSecret: 'Dzsw1oCQv3I3eh6bP2RrV1xN',
//   mongoURI: 'mongodb://noel:password@ds157677.mlab.com:57677/emaily-dev',
//   cookieKey: 'rgesgreshesntrdhrgresgrsege'
// };
