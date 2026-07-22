import type { ExerciseType } from '@/lib/exercise-types'

type MockExercise = {
  id: string
  name: string
  type: ExerciseType
}

export type Routine = {
  id: string
  title: string
  duration: string
  exercises: MockExercise[]
}

export const MOCK_ROUTINES: Routine[] = [
  {
    id: '1',
    title: 'Push Day',
    duration: '45 min',
    exercises: [
      { id: '1-1', name: 'Bench Press', type: 'chest' },
      { id: '1-2', name: 'Overhead Press', type: 'shoulders' },
      { id: '1-3', name: 'Incline Dumbbell Press', type: 'chest' },
      { id: '1-4', name: 'Lateral Raise', type: 'shoulders' },
      { id: '1-5', name: 'Triceps Pushdown', type: 'arms' },
    ],
  },
  {
    id: '2',
    title: 'Pull Day',
    duration: '50 min',
    exercises: [
      { id: '2-1', name: 'Deadlift', type: 'back' },
      { id: '2-2', name: 'Pull-Up', type: 'back' },
      { id: '2-3', name: 'Barbell Row', type: 'back' },
      { id: '2-4', name: 'Bicep Curl', type: 'arms' },
    ],
  },
  {
    id: '3',
    title: 'Leg Day',
    duration: '55 min',
    exercises: [
      { id: '3-1', name: 'Back Squat', type: 'legs' },
      { id: '3-2', name: 'Romanian Deadlift', type: 'legs' },
      { id: '3-3', name: 'Leg Press', type: 'legs' },
      { id: '3-4', name: 'Calf Raise', type: 'legs' },
      { id: '3-5', name: 'Core Circuit', type: 'core' },
      { id: '3-6', name: 'Treadmill Finisher', type: 'cardio' },
    ],
  },
  {
    id: '4',
    title: 'Balls Day',
    duration: '55 min',
    exercises: [
      { id: '4-1', name: 'Back Squat', type: 'legs' },
      { id: '4-2', name: 'Romanian Deadlift', type: 'legs' },
      { id: '4-3', name: 'Leg Press', type: 'legs' },
      { id: '4-4', name: 'Calf Raise', type: 'legs' },
      { id: '4-5', name: 'Core Circuit', type: 'core' },
      { id: '4-6', name: 'Treadmill Finisher', type: 'cardio' },
    ],
  },
]
