const mongoose = require('mongoose')

const CoverLetterSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    jobTitle: {type: String, required: true},
    companyName: {type: String, required: true},
    body: {type: String, required: true}, // Majority of cover letter content
    generatedFromResumeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resume',
        required: false
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true});

const CoverLetter = mongoose.Mongoose.model('CoverLetter', CoverLetterSchema);

module.exports = CoverLetter;