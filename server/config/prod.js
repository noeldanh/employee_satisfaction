// prod.js - production keys here!!
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN
};
// module.exports = {
//   googleClientID:
//     '868103800816-51caumuhdmg23ick93c7tmle0tie5aqo.apps.googleusercontent.com',
//   googleClientSecret: 'Dzsw1oCQv3I3eh6bP2RrV1xN',
//   mongoURI: 'mongodb://noel:password@ds157677.mlab.com:57677/emaily-dev',
//   cookieKey: 'rgesgreshesntrdhrgresgrsege'
// };
