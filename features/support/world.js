import Zombie from 'zombie';

class World {
    constructor() {
        this.browser = new Zombie(); // this.browser will be available in step definitions
    }
    
    visit(url, callback) {
        this.browser.visit(url, callback);
    }
    
    isValidArg(arg) {
        return typeof arg !== 'function';
    }
}

module.exports = function(){
    this.World = World;
};