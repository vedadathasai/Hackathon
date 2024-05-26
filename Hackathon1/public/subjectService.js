app.service('subjectService', ['$http', function($http) {
    this.getAllSubjects = function() {
        return $http.get('/subjects');
    };

    this.getSubjectsByName = function(name) {
        return $http.get('/subjects/search', { params: { name: name } });
    };

    this.getNotesBySubjectId = function(subjectId) {
        return $http.get(`/subjects/${subjectId}/notes`);
    };

    this.getSyllabusBySubjectId = function(subjectId) {
        return $http.get(`/subjects/${subjectId}/syllabus`);
    };

    this.getTextBooksBySubjectId = function(subjectId) {
        return $http.get(`/subjects/${subjectId}/textbooks`);
    };

    this.getPapersBySubjectId = function(subjectId) {
        return $http.get(`/subjects/${subjectId}/papers`);
    };
}]);
