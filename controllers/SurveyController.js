surveyBot.controller('SurveyCtrl', function SurveyCtrl($scope, SurveyFactor) {
  $scope.responses = SurveyFactory.responses;
  $scope.SurveyFactory = SurveyFactory;
});
