const db = require('./database');

async function getAllSubjects(req, res) {
    try {
        const subjects = await db.getAllSubjects();
        res.json(subjects);
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
}

async function getSubjectById(req, res) {
    try {
        const subjectId = req.params.subjectId;
        const subject = await db.getSubjectById(subjectId);
        if (subject) {
            res.json(subject);
        } else {
            res.status(404).send("Subject not found");
        }
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
}

async function getSubjectsByName(req, res) {
    try {
        let subjects = await db.getSubjectsByName(req.query.name);
        res.json(subjects);
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
}

async function getNotesBySubjectId(req, res) {
    try {
        let notes = await db.getNotesBySubjectId(req.params.subjectId);
        res.json(notes);
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
}

async function getSyllabusBySubjectId(req, res) {
    try {
        let syllabus = await db.getSyllabusBySubjectId(req.params.subjectId);
        res.json(syllabus);
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
}

async function getTextBooksBySubjectId(req, res) {
    try {
        let textbooks = await db.getTextBooksBySubjectId(req.params.subjectId);
        res.json(textbooks);
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
}

async function getPapersBySubjectId(req, res) {
    try {
        let papers = await db.getPapersBySubjectId(req.params.subjectId);
        res.json(papers);
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
}

module.exports = {
    getAllSubjects,
    getSubjectsByName,
    getNotesBySubjectId,
    getSyllabusBySubjectId,
    getTextBooksBySubjectId,
    getPapersBySubjectId
};