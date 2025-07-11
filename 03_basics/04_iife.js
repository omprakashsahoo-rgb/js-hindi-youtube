// Immediately Invoked Function Expressions (IIFE)


// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();

// ( (name) => {
    // Unnamed iife
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')

(function chai(){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
