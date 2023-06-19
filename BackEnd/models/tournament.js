const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    name: { type: String  },
    description: { type: String },
    creationDate: { type: Date },
    startDate: { type: Date }, //date and time
    endDate: { type: Date },
    game: { type: String },
    participants: { type: Array }, //array of userIds (strings)
    maxParticipants: { type: Number }, //max number of participants
    winner: { type: String},//userId of the winner
    categoryId: {type:mongoose.Schema.Types.ObjectId, ref:'Category'},
});

module.exports = mongoose.model('Tournament', tournamentSchema);
