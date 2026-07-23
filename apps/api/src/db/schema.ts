import type { RoutineExerciseData } from '@workspace/shared-utils'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: text('id').primaryKey(), // même uuid que celui généré côté client en mode Invité
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  createdAt: integer('created_at').notNull(),
})

export const exercises = sqliteTable('exercises', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type').notNull(), // mirrors ExerciseType from apps/mobile/lib/exercise-types.ts
  equipment: text('equipment'),
  isCustom: integer('is_custom', { mode: 'boolean' }).notNull().default(false),
  ownerId: text('owner_id'), // null si global/admin, sinon userId
  updatedAt: integer('updated_at').notNull(),
})

export const routines = sqliteTable('routines', {
  id: text('id').primaryKey(), // uuid généré côté client
  userId: text('user_id').notNull(),
  name: text('name').notNull(),
  exercisesData: text('exercises_data', { mode: 'json' }).notNull().$type<RoutineExerciseData[]>(),
  createdAt: integer('created_at').notNull(),
  updatedAt: integer('updated_at').notNull(),
})

export const workouts = sqliteTable('workouts', {
  id: text('id').primaryKey(), // uuid généré côté client
  userId: text('user_id').notNull(),
  routineId: text('routine_id'), // nullable: séance libre possible
  name: text('name').notNull(),
  startedAt: integer('started_at').notNull(),
  finishedAt: integer('finished_at'), // null tant que la séance est en cours
  createdAt: integer('created_at').notNull(),
  updatedAt: integer('updated_at').notNull(),
})

export const performedSets = sqliteTable('performed_sets', {
  id: text('id').primaryKey(),
  workoutId: text('workout_id').notNull(),
  exerciseId: text('exercise_id').notNull(),
  exerciseOrder: integer('exercise_order').notNull(),
  setOrder: integer('set_order').notNull(),
  reps: integer('reps').notNull(),
  weight: integer('weight').notNull(),
  completed: integer('completed', { mode: 'boolean' }).notNull(),
})
