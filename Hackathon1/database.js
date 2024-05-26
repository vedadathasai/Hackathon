const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Thathagaru@50',
    database: 'project'
});

async function getAllSubjects() {
    try {
        const [rows, fields] = await pool.query("SELECT subject_name FROM subjects");
        return rows;
    } catch (error) {
        console.error("Error retrieving subjects:", error);
        throw new Error('Error retrieving subjects');
    }
}

async function getSubjectsByName(name) {
    try {
        const [rows, fields] = await pool.query("SELECT subject_name FROM subjects WHERE UPPER(subject_name) LIKE UPPER(CONCAT('%', ?, '%'))", [name]);
        return rows;
    } catch (error) {
        console.error(error);
        throw new Error('Error retrieving subjects by name');
    }
}

async function getNotesBySubjectId(subjectId) {
    try {
        const [rows, fields] = await pool.query("SELECT CONVERT(Notes USING utf8) AS Notes FROM subjects WHERE subject_id = ?", [subjectId]);
        return rows;
    } catch (error) {
        console.error(error);
        throw new Error('Error retrieving notes by subject ID');
    }
}

async function getSyllabusBySubjectId(subjectId) {
    try {
        const [rows, fields] = await pool.query("SELECT CONVERT(Syllabus USING utf8) AS Syllabus FROM subjects WHERE subject_id = ?", [subjectId]);
        return rows;
    } catch (error) {
        console.error(error);
        throw new Error('Error retrieving syllabus by subject ID');
    }
}

async function getTextBooksBySubjectId(subjectId) {
    try {
        const [rows, fields] = await pool.query("SELECT CONVERT(TextBooks USING utf8) AS TextBooks FROM subjects WHERE subject_id = ?", [subjectId]);
        return rows;
    } catch (error) {
        console.error(error);
        throw new Error('Error retrieving textbooks by subject ID');
    }
}

async function getPapersBySubjectId(subjectId) {
    try {
        const [rows, fields] = await pool.query("SELECT CONVERT(Previous_year_question_papers USING utf8) AS Previous_year_question_papers FROM subjects WHERE subject_id = ?", [subjectId]);
        return rows;
    } catch (error) {
        console.error(error);
        throw new Error('Error retrieving papers by subject ID');
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