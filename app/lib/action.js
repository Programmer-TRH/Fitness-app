"use server";
import connectDB from "./db";
import Exercise from "../models/Exercise";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Exo } from "next/font/google";

export default async function addExercise(formData) {
  const { name, duration, rating, calories, notes, mood } = Object.fromEntries(
    formData
  );

  try {
    await connectDB();
    const newExercise = new Exercise({
      name,
      duration,
      rating,
      calories,
      notes,
      mood
    });
    await newExercise.save();
  } catch (err) {
    throw new Error(err);
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
}

// Delete exercise
export async function deleteExercise(formData) {
  const { id } = Object.fromEntries(formData);
  await connectDB();
  try {
    await Exercise.findByIdAndDelete(id);
  } catch (err) {
    throw new Error(err);
  }
  revalidatePath("/");
}

export async function updateExercisePage(formData) {
    const { name, duration, rating, calories, notes, mood,id } = Object.fromEntries(
        formData
      );

    await connectDB();
    try {
      const updateExercise = {
        name, duration, rating, calories, notes, mood
      }
      Object.keys(formData).forEach((key) => (updateExercise[key] === "" || undefined) && delete updateExercise[key])

      await Exercise.findByIdAndUpdate(id, updateExercise);
    } catch (err) {
      throw new Error(err);
    }
    revalidatePath("/dashboard");
    redirect("/dashboard");
}