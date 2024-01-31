import Mentor from '../models/Mentor.js';
import Student from '../models/Student.js';
import dotenv from 'dotenv'
dotenv.config()

const CreateMentor = async (req, res) => {
  try {
    console.log(req.body);
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.status(200).json({ message: "Mentor created successfully", mentor:mentor });
  } catch (error) {
    res.status(500).json({ message: "Internal server Error" });
  }
};

// Create Student API
 const CreateStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    //  await student.save();
    res.status(200).send({message:"fetched successfully",student});
  } catch (error) {
    res.status(500).send({
      message: "Internal server Error"
    });
  }
};
//Assign a mentor to a student

const AssignMentorStudent=async(req,res)=>{
 
try {
  const{studentId}=req.params;
  const {mentorId}=req.body;
 const  student=await Student.findByIdAndUpdate(studentId,{mentor:mentorId},{new:true});
  res.status(200).send({message:"Assigned a student successfully",student})
} catch (error) {
  console.log(error)
  res.staus(500).send({message:"Internal server error"})
}

}

// Show all students for a particular mentor

const MentorStudents=async(req,res)=>{

  try {
        const{mentorId}=req.params;
      const students = await Student.find({ mentor: mentorId });
      res.status(200).send({
          message: 'Successfully fetched students data with mentor',
          students
      });
  } catch (err) {
      console.error(err);
      res.status(500).send({ error: 'Server error' });
  }


}

// Show previously assigned mentor for a particular student
const PrevivousMentor=async(req,res)=>{
  // const{mentorId,studentId}=req.params;
  try {
      const { studentId } = req.params;
      const student = await Student.findById(studentId).populate('mentor');
      res.status(200).send({
          message: 'Successfully fetched',
          Student: student.mentor
      });
  } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Server error' });
  }
}

export default {CreateMentor,CreateStudent,AssignMentorStudent,MentorStudents,PrevivousMentor}
