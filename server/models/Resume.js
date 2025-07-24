const mongoose = require('mongoose')

const resumeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    title: {
        type: String,
        default: 'Untitled Resume'
    },
    fullname: String,
    email: String,
    phone: String,
    address: String,
    summary: String, //Optional field

    education: [
        {
            school: String,
            degree: String,
            startDate: Date,
            location: String,
            honors: String, // Optional
        }
    ],

    experience: [
        {
        title: {type: String, required: true},
        company: {type:String, required: true},
        location: {type: String},
        startDate: {type:String, required: true},
        endDate: {type: Date}, // can be null if still employed
        responsibilities: [String] // bullet points
        }
    ],
    skills: {
        type: [String],
        default: [] // default if empty
    },
    certifications: {
        name: {type: String, required: true},
        issuer: String,
        date: Date,
    },
    awards: {
        title: {type: String, required: true},
        issuer: String,
        date: Date,
        details: String,
    }
}, {timestamps: true});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;