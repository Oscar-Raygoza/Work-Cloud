const helpers = {};

helpers.randomName = ()=>{
    const possible = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let randomName = 0;
    for(let i = 0; i < 6; i++){
        randomName +=possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return randomName;
}

module.exports = helpers;