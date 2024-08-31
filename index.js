const express= require('express');
const {connectDB}= require('./model/DBconnection');
const {}= require('./model/UploadImg')
const cors= require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
require('dotenv').config();


const PORT = process.env.PORT || 5000;

// Connect to MongoDB

connectDB();
const app = express();


// Middleware

app.use(cors());
app.use(express.json());


const uploadroutes =  require('./controller/router/Upload')
const uploadImgRoutes = require('./controller/router/UploadImg')
const userRoutes = require('./controller/router/User');
const accountRoutes = require('./controller/router/User')
const loginRoute = require('./controller/router/Login')
const messageRoute= require('./controller/router/Message')





app.use('/upload', uploadroutes);
app.use('/uploadImg', uploadImgRoutes);
app.use('/api/users',userRoutes);
app.use('/api/account',accountRoutes)
app.use('/api/login',loginRoute)
app.use('/message',messageRoute)
// app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



// Starting the server



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));