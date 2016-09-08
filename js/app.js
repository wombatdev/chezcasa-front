
"use strict";

(function() {
    angular.module ("chezcasa", [
            "ui.router",
            "ngResource",
            "ngAnimate"
        ])
        .config ([
            "$stateProvider",
            "$locationProvider",
            "$urlRouterProvider",
            RouterFunction
        ])

        function RouterFunction($stateProvider, $locationProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true)
            $stateProvider
                .state("Home", {
                    url: "/",
                    templateUrl: "/js/home.html",
                    controller: "HomeController",
                    controllerAs: "HomeViewModel"
                })
                .state("About", {
                    url: "/about",
                    templateUrl: "/js/about.html",
                    controller: "AboutController",
                    controllerAs: "AboutViewModel"
                })
                .state("Dishes",{
                    url:"/dishes",
                    templateUrl:"/js/dishes/dishes.html",
                    controller: "DishesController",
                    controllerAs: "DishesViewModel"
                })
                .state("Signin",{
                    url:"/signin",
                    templateUrl:"/js/users/signin.html",
                    controller: "SigninController",
                    controllerAs: "SigninViewModel"
                })
                .state("Signup",{
                    url:"/signup",
                    templateUrl:"/js/users/signup.html",
                    controller: "SignupController",
                    controllerAs: "SignupViewModel"
                })
                .state("Chefs",{
                    url:"/chefs",
                    templateUrl:"/js/users/chefs.html",
                    controller: "ChefsController",
                    controllerAs: "ChefsViewModel"
                })
                .state("Apply",{
                    url:"/apply",
                    templateUrl:"/js/users/apply.html",
                    controller: "ApplyController",
                    controllerAs: "ApplyViewModel"
                })
            $urlRouterProvider.otherwise("/")
        }

// END OF IIFE
})();
