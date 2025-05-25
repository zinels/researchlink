const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/opportunities', (req, res) => {
    res.json([
        {
            id: 1,
            faculty: "Dr. Smith",
            title: "AI in Education",
            department: "CSE",
            deadline: "2025-06-01"
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
