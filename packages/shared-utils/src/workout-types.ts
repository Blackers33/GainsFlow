export type TargetSet = {
  order: number
  reps: number
  weight: number
  restSeconds: number
}

export type RoutineExerciseData = {
  exerciseId: string
  order: number
  targetSets: TargetSet[]
}
