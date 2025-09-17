require ('dotenv').config();
const app = require('./app'); 
const connectdb = require('./config/db');

connectdb();

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});