const app = require('./app');
const connectDatabase = require('./database/database');
const cloudinary = require('cloudinary');

//Handling Uncaught Exception
process.on('uncaughtException', (err) => {
    console.log(`Error ${err.message}`);
    console.log(`Shutting down the server dut to Uncaught Exception`);
    process.exit(1);
});

//Config
if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({ path: 'config/config.env' });
}

//Connect Database
connectDatabase();

//Cloudinary
cloudinary.config({
    cloud_name: process.env.COLUDINARY_NAME,
    api_key: process.env.COLUDINARY_API_KEY,
    api_secret: process.env.COLUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Server Running on port ${process.env.PORT}`);
});

//Unhandled promise rejection errors
process.on('unhandledRejection', (err) => {
    console.log(`Error ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});
