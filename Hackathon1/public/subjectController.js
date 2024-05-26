app.controller('SubjectController', ['$scope', 'subjectService', function($scope, subjectService) {
    $scope.subjects = [];
    $scope.subjectDetails = {};
    $scope.currentSection = 'home';
    $scope.currentContent = '';

    // Fetch all subjects
    $scope.loadSubjects = function() {
        subjectService.getAllSubjects().then(function(response) {
            $scope.subjects = response.data;
        }, function(error) {
            console.error('Error fetching subjects:', error);
        });
    };

    // Search subjects by name
    $scope.searchSubjects = function(name) {
        subjectService.getSubjectsByName(name).then(function(response) {
            $scope.subjects = response.data;
        }, function(error) {
            console.error('Error searching subjects:', error);
        });
    };

    // Load subject details by ID
    $scope.showSubjectDetails = function(subjectId) {
        $scope.currentSection = 'subjectDetails';
        
        subjectService.getNotesBySubjectId(subjectId).then(function(response) {
            $scope.subjectDetails.Notes = response.data[0].Notes;
        }, function(error) {
            console.error('Error fetching notes:', error);
        });

        subjectService.getSyllabusBySubjectId(subjectId).then(function(response) {
            $scope.subjectDetails.Syllabus = response.data[0].Syllabus;
        }, function(error) {
            console.error('Error fetching syllabus:', error);
        });

        subjectService.getTextBooksBySubjectId(subjectId).then(function(response) {
            $scope.subjectDetails.TextBooks = response.data[0].TextBooks;
        }, function(error) {
            console.error('Error fetching textbooks:', error);
        });

        subjectService.getPapersBySubjectId(subjectId).then(function(response) {
            $scope.subjectDetails.Previous_year_question_papers = response.data[0].Previous_year_question_papers;
        }, function(error) {
            console.error('Error fetching papers:', error);
        });
    };

    // Show content in subject details
    $scope.showContent = function(contentType) {
        $scope.currentContent = contentType;
    };

    // Initial load
    $scope.loadSubjects();
}]);
