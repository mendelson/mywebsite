'use strict';

var app = angular.module("myApp", ["ngRoute", "ngAnimate", "ngSanitize", "ui.bootstrap"]);
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
  .when("/resources", {
    templateUrl: "pages/resources.html",
    controller: "ResourcesCtrl"
  })
  .when("/about", {
    templateUrl: "pages/about.html",
    controller: "AboutCtrl"
  })
  .otherwise({
    templateUrl:"pages/404.html",
    controller: "404Ctrl"
  });

  // $locationProvider.html5Mode({enabled: true, requireBase: false});
});

app.controller("HomeCtrl", function ($scope) {
  // Google Analytics
  ga('send', {
    hitType: 'event',
    eventCategory: 'Home',
    eventAction: 'access',
    eventLabel: 'Home Page Access'
  });
});
app.controller("PublicationsCtrl", function ($scope) {
  // Google Analytics
  ga('send', {
    hitType: 'event',
    eventCategory: 'Publications',
    eventAction: 'access',
    eventLabel: 'Pulications Page Access'
  });
});
app.controller("ResourcesCtrl", function ($scope) {
  $scope.status = {
    open1: false,
    open2: false
  };

  // Google Analytics
  ga('send', {
    hitType: 'event',
    eventCategory: 'Resources',
    eventAction: 'access',
    eventLabel: 'Resources Page Access'
  });
});
app.controller("AboutCtrl", function ($scope) {
  // Google Analytics
  ga('send', {
    hitType: 'event',
    eventCategory: 'About',
    eventAction: 'access',
    eventLabel: 'About Page Access'
  });
});
app.controller("404Ctrl", function ($scope) {
  // Google Analytics
  ga('send', {
    hitType: 'event',
    eventCategory: '404',
    eventAction: 'access',
    eventLabel: '404 Page Access'
  });
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

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
