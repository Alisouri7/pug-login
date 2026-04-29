const mongoose = require('mongoose');
const app = require('./app');

(async () => {
    await mongoose.connect('mongodb://localhost:27017/')
    console.log('DB connected')
    
})()

app.listen(4002, () => {
    console.log('server run on port 4002!')
})