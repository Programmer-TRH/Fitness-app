import mongoose from "mongoose"

const ExerciseSchema = new mongoose.Schema({
    name: String,
    duration: Number,
    calories: Number,
    rating: Number,
    mood: String,
    notes: String,
})

export default mongoose?.models?.Exercise || mongoose.model("Exercise", ExerciseSchema);