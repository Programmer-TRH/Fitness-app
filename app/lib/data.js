'use server'
import { connect } from "mongoose"
import Exercise from "../models/Exercise"
import connectDB from "./db"

export const getExercise = async() => {
    try{
        await connectDB()
        const exercise = await Exercise.find({})
        return exercise
    } catch(error){
        throw new Error("Failed to Get Exercise" + error)
    }
} 

export async function getSingleExercise(id){
    try{
        await connectDB()
        const exercise = await Exercise.findById(id)
        return exercise
    }catch(error){
        throw new Error("Failed to Get Exercise" + error)
    }
}