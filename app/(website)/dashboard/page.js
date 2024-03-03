import { getExercise } from '@/app/lib/data'
import ExerciseCard from '@/app/ui/ExerciseCard/ExerciseCard'
import React from 'react'

export default async function DashboarPage() {
  const exercises = await getExercise()
  return (
    <section className='px-4 py-8'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
       {
        exercises.length === 0 ? (
          <div>
          <p className='text-center font-bold text-3xl'>
            No Exercise Posted? Add Your First Exercise Today
          </p>
          </div>
         ) : (
          exercises.map((exercise)=> (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))
        )
       }
      </div>
    </section>
  )
}
