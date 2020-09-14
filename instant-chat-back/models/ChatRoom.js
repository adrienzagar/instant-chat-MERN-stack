import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ChatRoomSchema = new Schema({
    name: {
        type: String
    }
})

export default mongoose.model('chatroom', ChatRoomSchema)