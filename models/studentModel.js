const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    fullname: { type: String, require: true },
    birthday: { type: Date, require: true },
    GPA: { type: Number, default: 0 },
    studyFee: { type: Number, default: 2000 },
    class: [{className: {type: String, default: "Fullstack developer"}, ClassId: {type:String, default: "WD-001"},}]
}, { timestamps: true })

module.exports = mongoose.model('Students', studentSchema)
