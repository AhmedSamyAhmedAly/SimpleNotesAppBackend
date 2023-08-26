require('dotenv').config();
require('./database/mongodb');

const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.static('public'));
app.use(express.json());

const notesRoutes = require('./routes/APIs-V1/notes')

app.use("/api/v1/note", notesRoutes)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT|| 3000, function() {
  console.log(`Server running on port ${PORT}`+ "  http://localhost");
});