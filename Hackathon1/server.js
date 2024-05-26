const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Configure MySQL connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Thathagaru@50',
    database: 'project',
    connectionLimit: 10
});

// Route to get subjects// Route to get subjects
app.get('/subjects', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM subjects');
        const formattedSubjects = rows.map(subject => ({
            Subject_ID: subject.Subject_ID,
            Subject_name: subject.Subject_name,
            // Convert buffer fields to appropriate formats
            Notes: subject.Notes.toString(), // Assuming Notes is a buffer
            Syllabus: subject.Syllabus.toString(), // Assuming Syllabus is a buffer
            TextBooks: subject.TextBooks.toString(), // Assuming TextBooks is a buffer
            Previous_year_question_papers: subject.Previous_year_question_papers.toString(), // Assuming Previous_year_question_papers is a buffer
        }));
        res.json(formattedSubjects);
    } catch (error) {
        console.error('Error fetching subjects:', error);
        res.status(500).send('Error fetching subjects');
    }
});


// Serve the frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
