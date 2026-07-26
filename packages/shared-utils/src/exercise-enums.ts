export const MUSCLES = [
  'abdominals',
  'abductors',
  'adductors',
  'biceps',
  'calves',
  'chest',
  'forearms',
  'glutes',
  'hamstrings',
  'lats',
  'lower_back',
  'middle_back',
  'neck',
  'quadriceps',
  'shoulders',
  'traps',
  'triceps',
] as const

export const EQUIPMENT = [
  'barbell',
  'dumbbell',
  'cable',
  'machine',
  'kettlebells',
  'bands',
  'medicine_ball',
  'exercise_ball',
  'foam_roll',
  'e_z_curl_bar',
  'body_only',
  'other',
] as const

export const CATEGORIES = [
  'strength',
  'stretching',
  'plyometrics',
  'powerlifting',
  'olympic_weightlifting',
  'strongman',
  'cardio',
] as const

export const LEVELS = ['beginner', 'intermediate', 'expert'] as const
export const FORCES = ['push', 'pull', 'static'] as const
export const MECHANICS = ['compound', 'isolation'] as const

export type Muscle = (typeof MUSCLES)[number]
export type Equipment = (typeof EQUIPMENT)[number]
export type ExerciseCategory = (typeof CATEGORIES)[number]
export type ExerciseLevel = (typeof LEVELS)[number]
export type ExerciseForce = (typeof FORCES)[number]
export type ExerciseMechanic = (typeof MECHANICS)[number]
