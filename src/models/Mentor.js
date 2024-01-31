import mongoose from 'mongoose';

const MentorSchema = new mongoose.Schema({
   name:{
    type:String,
    required:[true,"Name is required"]
},
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student' 
  }]
}, { versionKey: false });

const Mentor= mongoose.model('Mentor', MentorSchema);
export default {Mentor,MentorSchema}
