import { useRouter } from 'expo-router'
import { View } from 'react-native'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { Text } from '@/components/ui/text'

export default function AuthScreen() {
  const router = useRouter()

  return (
    <View className="flex-1 items-center justify-center bg-card px-6 py-10">
      <Text className="text-xl font-bold text-foreground">GainsFlow</Text>
      <Text className="text-sm text-muted-foreground">Track. Progress. Dominate.</Text>
      <View className="h-8 w-full opacity-0" />
      <Card className="w-full max-w-sm">
        <CardContent>
          <View className="w-full justify-center gap-4">
            <View className="gap-2">
              <Text className="text-sm font-medium text-foreground">Email</Text>
              <Input id="email" placeholder="m@example.com" />
            </View>
            <View className="gap-2">
              <Text className="text-sm font-medium text-foreground">Password</Text>
              <PasswordInput id="password" placeholder="••••••••" />
            </View>
          </View>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button className="w-full">
            <Text>Sign In</Text>
          </Button>
          <Text className="text-xs text-muted-foreground">- or -</Text>
          <Button variant="outline" className="w-full" onPress={() => router.replace('/(tabs)')}>
            <Text>Continue as Guest</Text>
          </Button>
          <View className="h-4 w-full opacity-0" />
          <Text className="text-xs text-muted-foreground">
            Don't have an account? <Text className="underline text-xs">Sign up</Text>
          </Text>
        </CardFooter>
      </Card>
    </View>
  )
}
