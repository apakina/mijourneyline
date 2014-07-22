var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var JourneyLineSchema   = new Schema({
	title : String
});

module.exports = mongoose.model('usr_journey_point_tbl', JourneyLineSchema);