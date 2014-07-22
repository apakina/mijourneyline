'use strict';

var Journeypoint     = require('../routes/journeypoint');

module.exports = function(app) {
    /* Journey routes */
    app.get('/journeypoints', Journeypoint.getAllJournyPoints);
    app.post('/journeypoints', Journeypoint.addJourneyPoint);
};
