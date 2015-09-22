surveyBot.controller('SurveyCtrl', function SurveyCtrl($scope, SurveyFactory) {
  $scope.responses = SurveyFactory.responses;
  $scope.SurveyFactory = SurveyFactory;
});
