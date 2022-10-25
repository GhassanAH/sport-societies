const mongoose = require('mongoose')
const {Schema} = mongoose
const d = new Date()
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const nexMatchSchema = new Schema({
    league: String,
    data: String,
    createdAt: { type: String, default: months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear() },

})
mongoose.model('nextMatch', nexMatchSchema)