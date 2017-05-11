'use strict';

var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider, $locationProvider) {
  // app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "pages/home.html",
    controller: "HomeCtrl"
  })
  .when("/home", {
    templateUrl : "pages/home.html",
    controller: "HomeCtrl"
  })
  .when("/publications", {
    templateUrl : "pages/publications.html",
    controller: "PublicationsCtrl"
  })
  // .when("/view1", {
  //   templateUrl : "pages/view1.html"
  // })
  // .when("/view2", {
  //   templateUrl : "pages/view2.html"
  // })
  .when("/template", {
    templateUrl: "pages/template.html"
  })
  .otherwise({
    // TO-DO: colocar uma página de 404 aqui
    // templateUrl: "pages/home.html"
    controller: "404Ctrl",
    templateUrl:"/pages/404.html"
    // redirectTo: "/"
  });

  // $locationProvider.html5Mode({enabled: true, requireBase: false});
});
app.controller("HomeCtrl", function ($scope) {

});
app.controller("PublicationsCtrl", function ($scope) {

});
app.controller("404Ctrl", function ($scope) {
  console.log("teste");
  // $location.path("/home");
});
