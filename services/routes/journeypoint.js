var Journeypoint    = require('../models/Journeypoint');

exports.getAllJournyPoints = function(req, res) {
		Journeypoint.find(function(err, journeypoints) {
			if (err)
				res.send(err);

			res.json(journeypoints);
		});
};


exports.addJourneyPoint = function(req, res) {

		var journeypoint = new Journeypoint(); 		// create a new instance of the Journeypoint model
		Journeypoint.title = req.body.title;  		// set the Journey Title name (comes from the request)
		// save the bear and check for errors
		Journeypoint.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'JourneyPoint added!' });
		});

};



