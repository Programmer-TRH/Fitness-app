import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Input,Textarea,Button} from "@nextui-org/react"
import { getSingleExercise } from '@/app/lib/data';
import { updateExercisePage } from '@/app/lib/action';

export default async function singleExercisePage({params}) {
 const {id} = params;
 const exercise = await getSingleExercise(id)
  return (
    <section className='px-4 py-8'>
      <Card className='max-w-screen-md mx-auto'>
        <CardHeader>
           The Fitness Tracker
        </CardHeader>
        <Divider />
        <CardBody>
          <form action={updateExercisePage } className='flex flex-col items-center p-4 gap-6'>
            <input type="hidden" name="id" defaultValue={exercise.id}/>
            <Input className='w-full'
            defaultValue={exercise.name}
            id='name'
            autoComplete='false'
            name='name' />
            <div className='flex gap-4 w-full'>
              <Input type='number' min={0} defaultValue={exercise.duration} id='duration' name='duration' />
              <Input type='number' min={0} defaultValue={exercise.calories} id='calories' name='calories' />
            </div>
            <select name='mood' id='mood' defaultValue={exercise.mood} className='w-full p-6 rounded-lg bg-gray-100 dark:bg-gray-700'>
              <option value="amazing">Amazing</option>
              <option value="solid job">Solid Work</option>
              <option value="glad its over">Glad Its Over</option>
            </select>
            <label htmlFor='rating'>Rating</label>
            <Input
            type='number' min={0} max={5} name='rating' id='rating' defaultValue={exercise.rating} />
            <Textarea name='notes' id='notes' defaultValue={exercise.notes} />
            <Button type="submit" className="bg-primary w-full">
              Update Exercise
            </Button>
          </form>
        </CardBody>
      </Card>
    </section>
  )
}
