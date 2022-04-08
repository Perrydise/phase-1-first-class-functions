const chai = 'chai'
const spies = 'chai-spies'
function receivesAFunction(callback){
   callback()
}

function returnsANamedFunction(){
    return function inside(){}
}

function returnsAnAnonymousFunction(){
    return () => {}
}