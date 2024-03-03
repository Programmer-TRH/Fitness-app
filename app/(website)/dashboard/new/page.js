import React from 'react'
import {Card, CardHeader, CardBody, Divider, Input,Textarea,Button} from "@nextui-org/react";
import addExercise from '@/app/lib/action';

export default function New() {
  return (
    <section className='px-4 py-8'>
      <Card className='max-w-screen-md mx-auto'>
        <CardHeader>
           The Fitness Tracker
        </CardHeader>
        <Divider />
        <CardBody>
          <form action={addExercise } className='flex flex-col items-center p-4 gap-6'>
            <Input className='w-full'
            placeholder='Name...'
            autoComplete='false'
            name='name' />
            <div className='flex gap-4 w-full'>
              <Input type='number' min={0} placeholder='Duration' name='duration' />
              <Input type='number' min={0} placeholder='Calories' name='calories' />
            </div>
            <select name='mood' className='w-full p-6 rounded-lg bg-gray-100 dark:bg-gray-700'>
              <option value="amazing">Amazing</option>
              <option value="solid job">Solid Work</option>
              <option value="glad its over">Glad Its Over</option>
            </select>
            <label htmlFor='rating'>Rating</label>
            <Input
            type='number' min={0} max={5} name='rating' id='rating' placeholder='Rating' />
            <Textarea name='notes' placeholder='Notes...' />
            <Button type="submit" className="bg-primary w-full">
              Post Exercise
            </Button>
          </form>
        </CardBody>
      </Card>
    </section>
  )
}
