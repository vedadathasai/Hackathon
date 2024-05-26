const app = angular.module('examPrepApp', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
    $scope.currentSection = 'home';
    $scope.subjects = [];
    $scope.selectedSubject = {};
    $scope.contentType = '';

    $scope.showSection = function(section) {
        $scope.currentSection = section;
    };

    $scope.showSubjectDetails = function(subject) {
        $scope.selectedSubject = subject;
        $scope.currentSection = 'subjectDetails';
    };

    $scope.showContent = function(type) {
        $scope.contentType = type;
    };

    // Fetch all subjects from the backend
    $http.get('http://localhost:3000/subjects')
        .then(response => {
            $scope.subjects = response.data;
        })
        .catch(error => {
            console.error('Error fetching subjects:', error);
        });
}]);
