surveyBot.factory('SurveyFactory', function SurveyFactory() {
  var factory = {};
  factory.responses = [];

  factory.surveySubmit = function() {
    var response = { ninjaTurtle: factory.ninjaTurtle,
                      sandurrito: factory.sandurrito,
                      pokemon: factory.pokemon,
                      vgSeries: factory.vgSeries,
                      superpower: factory.superpower,
                      twilight: factory.twilight,
                      mitchBSB: factory.mitchBSB };
    factory.responses.push(response);
    factory.ninjaTurtle = null;
    factory.sandurrito = null;
    factory.pokemon = null;
    factory.vgSeries = null;
    factory.superpower = null;
    factory.twilight = null;
    factory.mitchBSB = null;
  };
  return factory;
});
