import type { ExerciseCategory, Muscle } from '@workspace/shared-utils'
export type ExerciseType = 'chest' | 'back' | 'shoulders' | 'arms' | 'legs' | 'core' | 'cardio'

type ExerciseTypeConfig = {
  label: string
  color: string
  darkColor: string
}

export const EXERCISE_TYPES: Record<ExerciseType, ExerciseTypeConfig> = {
  chest: { label: 'exerciseTypes.chest', color: '#2a78d6', darkColor: '#3987e5' },
  back: { label: 'exerciseTypes.back', color: '#008300', darkColor: '#008300' },
  shoulders: { label: 'exerciseTypes.shoulders', color: '#e87ba4', darkColor: '#d55181' },
  arms: { label: 'exerciseTypes.arms', color: '#eda100', darkColor: '#c98500' },
  legs: { label: 'exerciseTypes.legs', color: '#1baf7a', darkColor: '#199e70' },
  core: { label: 'exerciseTypes.core', color: '#eb6834', darkColor: '#d95926' },
  cardio: { label: 'exerciseTypes.cardio', color: '#4a3aa7', darkColor: '#9085e9' },
}

const MUSCLE_TO_TYPE: Record<Muscle, Exclude<ExerciseType, 'cardio'>> = {
  chest: 'chest',
  lats: 'back',
  lower_back: 'back',
  middle_back: 'back',
  shoulders: 'shoulders',
  neck: 'shoulders',
  traps: 'shoulders',
  biceps: 'arms',
  triceps: 'arms',
  forearms: 'arms',
  quadriceps: 'legs',
  hamstrings: 'legs',
  calves: 'legs',
  glutes: 'legs',
  abductors: 'legs',
  adductors: 'legs',
  abdominals: 'core',
}

export function getExerciseTypeColor(type: ExerciseType, isDark: boolean): string {
  const config = EXERCISE_TYPES[type]
  return isDark ? config.darkColor : config.color
}

export function getExerciseType(primaryMuscle: Muscle, category: ExerciseCategory): ExerciseType {
  if (category === 'cardio') return 'cardio'
  return MUSCLE_TO_TYPE[primaryMuscle]
}
