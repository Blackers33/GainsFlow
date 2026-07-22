import { FlatList } from 'react-native'
import { RoutineCard } from '@/components/routine-card'
import { MOCK_ROUTINES } from '@/lib/mock-routines'

export default function HomeScreen() {
  return (
    <FlatList
      className="bg-[#f2f2f7] dark:bg-background"
      contentContainerClassName="gap-3 p-4"
      data={MOCK_ROUTINES}
      keyExtractor={routine => routine.id}
      renderItem={({ item }) => (
        <RoutineCard routine={item} onPress={() => console.log('Open routine', item.id)} />
      )}
    />
  )
}
