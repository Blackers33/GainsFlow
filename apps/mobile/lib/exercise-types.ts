export type ExerciseType = 'chest' | 'back' | 'shoulders' | 'arms' | 'legs' | 'core' | 'cardio'

type ExerciseTypeConfig = {
  label: string
  color: string
  darkColor: string
}

export const EXERCISE_TYPES: Record<ExerciseType, ExerciseTypeConfig> = {
  chest: { label: 'Chest', color: '#2a78d6', darkColor: '#3987e5' },
  back: { label: 'Back', color: '#008300', darkColor: '#008300' },
  shoulders: { label: 'Shoulders', color: '#e87ba4', darkColor: '#d55181' },
  arms: { label: 'Arms', color: '#eda100', darkColor: '#c98500' },
  legs: { label: 'Legs', color: '#1baf7a', darkColor: '#199e70' },
  core: { label: 'Core', color: '#eb6834', darkColor: '#d95926' },
  cardio: { label: 'Cardio', color: '#4a3aa7', darkColor: '#9085e9' },
}

export function getExerciseTypeColor(type: ExerciseType, isDark: boolean): string {
  const config = EXERCISE_TYPES[type]
  return isDark ? config.darkColor : config.color
}
