import { describe, expect, it } from 'vitest'
import { getExerciseType, getExerciseTypeColor } from './exercise-types'

describe('getExerciseType', () => {
  it('maps chest to the chest type', () => {
    expect(getExerciseType('chest', 'strength')).toBe('chest')
  })

  it('maps lats to the back type', () => {
    expect(getExerciseType('lats', 'strength')).toBe('back')
  })

  it('maps shoulders to the shoulders type', () => {
    expect(getExerciseType('shoulders', 'strength')).toBe('shoulders')
  })

  it('maps biceps to the arms type', () => {
    expect(getExerciseType('biceps', 'strength')).toBe('arms')
  })

  it('maps quadriceps to the legs type', () => {
    expect(getExerciseType('quadriceps', 'strength')).toBe('legs')
  })

  it('maps abdominals to the core type', () => {
    expect(getExerciseType('abdominals', 'strength')).toBe('core')
  })

  it('returns cardio when category is cardio, regardless of primary muscle', () => {
    expect(getExerciseType('chest', 'cardio')).toBe('cardio')
    expect(getExerciseType('quadriceps', 'cardio')).toBe('cardio')
  })
})

describe('getExerciseTypeColor', () => {
  it('returns the light color when isDark is false', () => {
    expect(getExerciseTypeColor('chest', false)).toBe('#2a78d6')
  })

  it('returns the dark color when isDark is true', () => {
    expect(getExerciseTypeColor('chest', true)).toBe('#3987e5')
  })
})
