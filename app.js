const express = require('express');
const db = require('./database');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    db.query('SELECT * FROM mdl_user LIMIT 10', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al realizar la consulta');
            return;
        }
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
