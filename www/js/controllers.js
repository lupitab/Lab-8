angular.module('app.controllers', [])

.controller('question1Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('question2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
$scope.q1 = $stateParams.q1;

}])

.controller('question3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
$scope.q1 = $stateParams.q1;
$scope.q2CB1 = $stateParams.q2CB1 ;
$scope.q2CB2 = $stateParams.q2CB2 ;
$scope.q2CB3 = $stateParams.q2CB3 ;

}])

.controller('aboutYouCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
$scope.opinion = $stateParams.opinion;
$scope.q1 = $stateParams.q1;
$scope.q2CB1 = $stateParams.q2CB1 ;
$scope.q2CB2 = $stateParams.q2CB2 ;
$scope.q2CB3 = $stateParams.q2CB3 ;

}])

.controller('sumaryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.opinion = $stateParams.opinion;
  $scope.q1 = $stateParams.q1;
  $scope.q2CB1 = $stateParams.q2CB1 ;
  $scope.q2CB2 = $stateParams.q2CB2 ;
  $scope.q2CB3 = $stateParams.q2CB3 ;
  $scope.name = $stateParams.name;
  $scope.lastN = $stateParams.lastN;
  $scope.mail = $stateParams.mail;


}])
