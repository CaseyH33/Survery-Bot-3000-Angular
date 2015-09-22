surveyBot.controller('ResultsCtrl', function ResultsCtrl($scope, SurveyFactory) {
  $scope.responses = SurveyFactory.responses;

  $scope.responseTally = function() {
    $scope.ninjaTurtleQ = [];
    $scope.sandurritoQ = [];
    $scope.pokemonQ = [];
    $scope.vgSeriesQ = [];
    $scope.superpowerQ = [];
    $scope.twilightQ = [];
    $scope.mitchBSBQ = [];
    $scope.responses.forEach(function(survey) {
      $scope.ninjaTurtleQ.push(survey.ninjaTurtle);
      $scope.sandurritoQ.push(survey.sandurrito);
      $scope.pokemonQ.push(survey.pokemon);
      $scope.vgSeriesQ.push(survey.vgSeries);
      $scope.superpowerQ.push(survey.superpower);
      $scope.twilightQ.push(survey.twilight);
      $scope.mitchBSBQ.push(survey.mitchBSB);
    });
    $scope.ninjaTurtleQ = _.countBy($scope.ninjaTurtleQ);
    $scope.sandurritoQ = _.countBy($scope.sandurritoQ);
    $scope.pokemonQ = _.countBy($scope.pokemonQ);
    $scope.vgSeriesQ = _.countBy($scope.vgSeriesQ);
    $scope.superpowerQ = _.countBy($scope.superpowerQ);
    $scope.twilightQ = _.countBy($scope.twilightQ);
    $scope.mitchBSBQ = _.countBy($scope.mitchBSBQ);
  };
});
