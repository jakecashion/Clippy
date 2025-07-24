const Resume = require('../models/Resume');

const createResume = async (req, res) => {
    try {
        const resume = new Resume(req.body);
        await resume.save();
        res.status(201).json({ message: 'Resume created successfully', resume });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create resume'});
    }
};

module.exports = { createResume };