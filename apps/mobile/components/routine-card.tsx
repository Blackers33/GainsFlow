import { Pressable, View } from 'react-native'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Text } from '@/components/ui/text'
import { useColorScheme } from '@/hooks/use-color-scheme'
import {
  EXERCISE_TYPES,
  type ExerciseType,
  getExerciseType,
  getExerciseTypeColor,
} from '@/lib/exercise-types'
import type { Routine } from '@/lib/mock-routines'

const PREVIEW_COUNT = 3

type RoutineCardProps = {
  routine: Routine
  onPress?: () => void
}

function RoutineCard({ routine, onPress }: RoutineCardProps) {
  const isDark = useColorScheme() === 'dark'
  const previewedExercises = routine.exercises.slice(0, PREVIEW_COUNT)
  const remainingCount = routine.exercises.length - previewedExercises.length
  const presentTypes = (Object.keys(EXERCISE_TYPES) as ExerciseType[]).filter(type =>
    routine.exercises.some(
      exercise => getExerciseType(exercise.primaryMuscle, exercise.category) === type,
    ),
  )

  return (
    <Pressable onPress={onPress}>
      <Card className="w-full py-4">
        <CardContent className="gap-3">
          <View className="flex-row items-start justify-between gap-2">
            <View className="shrink">
              <Text className="text-base font-semibold text-foreground">{routine.title}</Text>
              <Text className="text-xs text-muted-foreground">
                {routine.exercises.length} exercises
              </Text>
            </View>
            <Text className="text-sm text-muted-foreground">{routine.duration}</Text>
          </View>

          <View className="gap-1">
            {previewedExercises.map(exercise => (
              <View key={exercise.id} className="flex-row items-center gap-2">
                <View
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: getExerciseTypeColor(
                      getExerciseType(exercise.primaryMuscle, exercise.category),
                      isDark,
                    ),
                  }}
                />
                <Text className="text-sm text-foreground">{exercise.name}</Text>
                <Text className="ml-auto text-xs text-muted-foreground">3 sets</Text>
              </View>
            ))}
            {remainingCount > 0 && (
              <Text className="text-xs text-muted-foreground">+{remainingCount} more</Text>
            )}
          </View>

          <View className="flex-row flex-wrap gap-1.5">
            {presentTypes.map(type => (
              <Badge key={type} color={getExerciseTypeColor(type, isDark)}>
                {EXERCISE_TYPES[type].label}
              </Badge>
            ))}
          </View>
        </CardContent>
      </Card>
    </Pressable>
  )
}

export { RoutineCard }
