import express from 'express';
import UserController  from '../controller/userController.js';

const router = express.Router();

router.post('/users/mentors', UserController.CreateMentor);
router.post('/users/students', UserController.CreateStudent);
router.put('/users/assign-mentor/:studentId',UserController.AssignMentorStudent);
router.get('/users/:mentorId',UserController.MentorStudents);
router.get('/users/:studentId',UserController.PrevivousMentor);




export default router;