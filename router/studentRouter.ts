import express from "express";
import {
  createStudent,
  getStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} from "../controller/studentCnt";

const router = express.Router();
router.route("/create").post(createStudent);
router.route("/:id/update").patch(updateStudent);
router.route("/Students").get(getStudents);
router.route("/:id/delete").delete(deleteStudent);
router.route("/:id/all").get(getStudent);
export default router;
