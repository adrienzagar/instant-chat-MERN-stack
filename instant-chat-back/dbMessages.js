import mongoose from 'mongoose'

const instantChatSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    reveived: Boolean,
});

export default mongoose.model('messageContent', instantChatSchema)