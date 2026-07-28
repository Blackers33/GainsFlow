import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { Text } from '@/components/ui/text'
import { Card } from './ui/card'

function HomeHeader() {
  const { t } = useTranslation()

  return (
    <View className="gap-4 p-0">
      <View>
        <Text className="text-lg font-bold">{t('home.todaysTraining')}</Text>
      </View>

      <View className="flex-row gap-3">
        <Card className="flex-1" />
        <Card className="flex-1" />
        <Card className="flex-1" />
      </View>

      <View className="flex-row items-center justify-between">
        <Text className="text-base font-semibold">{t('home.myRoutines')}</Text>
      </View>
    </View>
  )
}

export { HomeHeader }
