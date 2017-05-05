'use strict';

var app = angular.module("myApp", ["ngRoute"]);
// app.config(function($routeProvider, $locationProvider) {
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "pages/home.html",
    controller: "HomeCtrl"
  })
  .when("/home", {
    templateUrl : "pages/home.html",
    controller: "HomeCtrl"
  })
  .when("/view1", {
    templateUrl : "pages/view1.html"
  })
  .when("/view2", {
    templateUrl : "pages/view2.html"
  })
  .otherwise({
    // TO-DO: colocar uma página de 404 aqui
    // templateUrl: "pages/home.html"
    redirectTo: "/"
  });

  // $locationProvider.html5Mode({enabled: true, requireBase: false});
});
app.controller("HomeCtrl", function ($scope) {

});
