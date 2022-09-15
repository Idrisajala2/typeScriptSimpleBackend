import { Request, Response } from "express";
import studentModel from "../model/studentModel";

type newStudent = {
  name: string;
  color: string;
  short: boolean;
  height: number;
};
const getStudents = async (req: Request, res: Response): Promise<Response> => {
  try {
    const students = await studentModel.find();
    return res
      .status(201)
      .json({ message: "students had beeen found", data: students });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const getStudent = async (req: Request, res: Response): Promise<Response> => {
  try {
    const students: newStudent | null = await studentModel.findById(
      req.params.id
    );
    return res
      .status(201)
      .json({ message: `${students?.name}`, data: students });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
const updateStudent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, color, short, height } = req.body;

    const students: newStudent | null = await studentModel.findByIdAndUpdate(
      req.params.id,
      { name, color, short, height },
      { new: true }
    );
    return res
      .status(201)
      .json({ message: `${students?.name} has been updated`, data: students });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
const createStudent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, short, color, height } = req.body;
    const students: newStudent | null = await studentModel.create({
      name,
      short,
      color,
      height,
    });
    return res
      .status(201)
      .json({ message: `${students?.name} has been created`, data: students });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
const deleteStudent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const students: newStudent | null = await studentModel.findByIdAndRemove(
      req.params.id
    );
    return res
      .status(201)
      .json({ message: `${students?.name} has been deleted`, data: students });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export { deleteStudent, createStudent, updateStudent, getStudent, getStudents };
