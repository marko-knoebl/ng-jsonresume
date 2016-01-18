"use strict";

angular.module('ng-jsonresume', [])
  .directive('resume', ['$http', function($http) {
    return {
      restrict: 'E',
      templateUrl: function($element, $attrs) {
        return $attrs.templateUrl;
      },
      controller: function($scope, $element, $attrs) {
        $http({method: 'GET', url:$attrs.resumeUrl})
        .then(function(result) {
          $scope.data = result.data;
          var topics = ['basics', 'work', 'volunteer', 'education', 'awards', 'publications',
                        'skills', 'languages', 'interests', 'references'];
          topics.forEach(function(topic) {
            $scope[topic] = $scope.data[topic];
          });
        });
      }
    }
  }]);
