
"use strict";

(function() {
    angular
        .module("chezcasa")
        .controller("ChefsController", [
            ChefsControllerFunction
        ])

    function ChefsControllerFunction() {
        console.log("I'm in the chef controller!")
        var vm = this;

    }

})();
