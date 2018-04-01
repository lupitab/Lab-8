angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


      .state('question1', {
    url: '/question1',
    templateUrl: 'templates/question1.html',
    controller: 'question1Ctrl'
  })

  .state('question2', {
    url: '/question2',
    params: {
       q1: null
     },
    templateUrl: 'templates/question2.html',
    controller: 'question2Ctrl'
  })

  .state('question3', {
    url: '/question3',
    params: {
       q1: null,
       q2CB1: null,
       q2CB2: null,
       q2CB3: null
     },
    templateUrl: 'templates/question3.html',
    controller: 'question3Ctrl'
  })

  .state('aboutYou', {
    url: '/personalinfo',
    params: {
       opinion: null,
       q1: null,
       q2CB1: null,
       q2CB2: null,
       q2CB3: null
     },
    templateUrl: 'templates/aboutYou.html',
    controller: 'aboutYouCtrl'
  })

  .state('sumary', {
    url: '/sumary',
    params: {
       opinion: null,
       q1: null,
       q2CB1: null,
       q2CB2: null,
       q2CB3: null,
       name: null,
       lastN: null,
       mail: null
     },
    templateUrl: 'templates/sumary.html',
    controller: 'sumaryCtrl'
  })

$urlRouterProvider.otherwise('/question1')


});
