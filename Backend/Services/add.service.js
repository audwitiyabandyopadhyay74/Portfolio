// import mongoose from "mongoose";
import { Project } from "../models/project.model.js";

export const registerProject = async (title, description, image, link, technologies) => {
  const project = new Project({
    title,
    description,
    image,
    link,
    technologies
  });
  return await project.save();
};