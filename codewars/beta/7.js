    function willYou(young, beautiful, loved) {
        // person is loved if and only if he/she is both young and beautiful
        // contradicts
        // young and beautiful but not loved;
        // loved but not young or not beautiful
        if(young&&beautiful&&!loved || !young&&loved|| !beautiful&&loved)
            return true;
        else
            return false;
    }
var young=false;
var beautiful=false;
var loved=true;
console.log(willYou(young,beautiful,loved));