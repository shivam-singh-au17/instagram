const mongoose = require("mongoose");
let Schema = mongoose.Schema;


let detailsSchema = new Schema(
    {
        name: { type: String },
        email: { type: String },
        address: { type: String },
        phone: { type: String },
    },
    { timestamps: true, versionKey: false }
);

let Details = mongoose.model("detail", detailsSchema);



let educationSchema = new Schema(
    {
        institute: { type: String },
        startYear: { type: String },
        endYear: { type: String },
        phone: { type: String },
    },
    { timestamps: true, versionKey: false }
);

let Education = mongoose.model("education", educationSchema);



let experienceSchema = new Schema(
    {
        company: { type: String },
        startYear: { type: String },
        endYear: { type: String },
        designation: { type: String },
    },
    { timestamps: true, versionKey: false }
);

let Experience = mongoose.model("experience", experienceSchema);



let skillSchema = new Schema(
    {
        skills: { type: String },
    },
    { timestamps: true, versionKey: false }
);

let Skills = mongoose.model("skill", skillSchema);


module.exports = { Details, Education, Experience, Skills };

