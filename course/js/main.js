"use strict";

/* old solution:

var bob = {
    _name:"bob",
    _friends:["Tharles","Thayna","Amaro"],
    printFriends: function printFriends () {

        var self = this;

        this._friends.forEach(function (f) {
            return console.log(self._name + " knows" + f);
        });
    }
};

bob.printFriends();
*/

var bob = {
    _name: "bob",
    _friends: ["Tharles", "Thayna", "Amaro"],
    printFriends: function printFriends() {
        var _this = this;

        this._friends.forEach(function (f) {
            return console.log(_this._name + " knows " + f);
        });
    }
};

bob.printFriends();
