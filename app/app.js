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
  .when("/template", {
    templateUrl: "pages/template.html"
  })
  .when("/about", {
    templateUrl: "pages/about.html"
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

// Language selection
app.run(function($rootScope, $window) {
  $rootScope.ptBR = false;
  $rootScope.enUS = false;
  var lang = $window.navigator.language || $window.navigator.userLanguage;

  if(lang === 'pt-BR')
  {
    $rootScope.ptBR = true;
  }
  else if (lang === 'en-US')
  {
    $rootScope.enUS = true;
  }
  else
  {
    $rootScope.enUS = true;
  }
});
