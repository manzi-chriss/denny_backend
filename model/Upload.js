const mongoose = require('mongoose');

const  uploadSchema = new  mongoose.Schema({
    description:{type: 'string',  required: true},
    videoId: {type: 'string', required: true},
    filePath:{type: 'string', required: true}
},{
    timestamps: true
})


const Upload= mongoose.model('Upload', uploadSchema)

module.exports = {Upload};