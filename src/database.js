import mongoose from 'mongoose';

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/userapi')

const db = mongoose.connection

db.on('connected', console.log.bind(console, 'MongoDB connection success'))
db.on('error', console.error.bind(console, 'MongoDB connection error'))

export default mongoose