const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Import routes
const studentRoutes = require('./routes/student');
const thesisRoutes = require('./routes/thesis');
const notificationRoutes = require('./routes/notification');
const messageRoutes = require('./routes/message');

// Use routes
app.use('/api', studentRoutes);
app.use('/api', thesisRoutes);
app.use('/api', notificationRoutes);
app.use('/api', messageRoutes);


// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });

app.listen(3000, ()=>{
    console.log("listening port 3000")
})

