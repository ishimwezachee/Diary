// Key.js - figures out what set of credentals to return

if (process.env.NODE_ENV === 'production') {
    // we are hosting return prod set of keys
    module.exports = require('./prod');

}else{
    // we are in dev to set keys
    module.exports = require('./dev')
}