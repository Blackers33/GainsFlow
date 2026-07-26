import type { ExerciseCategory, Muscle } from '@workspace/shared-utils'

type MockExercise = {
  id: string
  name: string
  primaryMuscle: Muscle
  category: ExerciseCategory
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
      { id: '1-1', name: 'Bench Press', primaryMuscle: 'chest', category: 'strength' },
      { id: '1-2', name: 'Overhead Press', primaryMuscle: 'shoulders', category: 'strength' },
      { id: '1-3', name: 'Incline Dumbbell Press', primaryMuscle: 'chest', category: 'strength' },
      { id: '1-4', name: 'Lateral Raise', primaryMuscle: 'shoulders', category: 'strength' },
      { id: '1-5', name: 'Triceps Pushdown', primaryMuscle: 'triceps', category: 'strength' },
    ],
  },
  {
    id: '2',
    title: 'Pull Day',
    duration: '50 min',
    exercises: [
      { id: '2-1', name: 'Deadlift', primaryMuscle: 'lower_back', category: 'strength' },
      { id: '2-2', name: 'Pull-Up', primaryMuscle: 'lats', category: 'strength' },
      { id: '2-3', name: 'Barbell Row', primaryMuscle: 'lats', category: 'strength' },
      { id: '2-4', name: 'Bicep Curl', primaryMuscle: 'biceps', category: 'strength' },
    ],
  },
  {
    id: '3',
    title: 'Leg Day',
    duration: '55 min',
    exercises: [
      { id: '3-1', name: 'Back Squat', primaryMuscle: 'quadriceps', category: 'strength' },
      { id: '3-2', name: 'Romanian Deadlift', primaryMuscle: 'hamstrings', category: 'strength' },
      { id: '3-3', name: 'Leg Press', primaryMuscle: 'quadriceps', category: 'strength' },
      { id: '3-4', name: 'Calf Raise', primaryMuscle: 'calves', category: 'strength' },
      { id: '3-5', name: 'Core Circuit', primaryMuscle: 'abdominals', category: 'strength' },
      { id: '3-6', name: 'Treadmill Finisher', primaryMuscle: 'quadriceps', category: 'cardio' },
    ],
  },
  {
    id: '4',
    title: 'Balls Day',
    duration: '55 min',
    exercises: [
      { id: '4-1', name: 'Back Squat', primaryMuscle: 'quadriceps', category: 'strength' },
      { id: '4-2', name: 'Romanian Deadlift', primaryMuscle: 'hamstrings', category: 'strength' },
      { id: '4-3', name: 'Leg Press', primaryMuscle: 'quadriceps', category: 'strength' },
      { id: '4-4', name: 'Calf Raise', primaryMuscle: 'calves', category: 'strength' },
      { id: '4-5', name: 'Core Circuit', primaryMuscle: 'abdominals', category: 'strength' },
      { id: '4-6', name: 'Treadmill Finisher', primaryMuscle: 'quadriceps', category: 'cardio' },
    ],
  },
]
