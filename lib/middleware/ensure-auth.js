const jwt = require('express-jwt');
const jwtRsa = require('jwks-rsa');

module.exports = jwt({
  credentialsRequired: process.env.NODE_ENV !== 'test',
  secret: jwtRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-kkhcjgzr.auth0.com/.well-known/jwks.json'
  }),
  audience: 'MpwTGukVD9eSMN4ah317r6iORkaL4eAp',
  issuer: 'https://dev-kkhcjgzr.auth0.com/',
  algorithms: ['RS256']


});
