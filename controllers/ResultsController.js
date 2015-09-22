surveyBot.controller('ResultsCtrl', function ResultsCtrl($scope, SurveyFactory) {
  $scope.responses = SurveyFactory.responses;
});
