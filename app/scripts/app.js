/**
 * Created by Mu on 16/2/16.
 */
angular
  .module('skirtWrapper',[
    'ngAnimate',
    'ngMaterial',
    'ngAria',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider){
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
      .state('/', {
        url: "/",
        templateUrl: "views/main.html"
      })
      .state('saleList', {
        url: "/saleList",
        templateUrl: "views/saleList.html",
        controller:"saleListCtrl",
        controllerAs:"saleList"
      })
  });