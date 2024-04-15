

module.exports = function mw (req , res , next) {

    console.log('hello from my middleware');

    next();
}