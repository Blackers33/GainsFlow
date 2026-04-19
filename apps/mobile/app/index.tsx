import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Dumbbell, Eye, EyeOff, Lock, Mail } from 'lucide-react-native'
import { useState } from 'react'
import { Pressable, View } from 'react-native'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { THEME } from '@/lib/theme'

export default function WelcomeScreen() {
  const colorScheme = useColorScheme() ?? 'light'
  const theme = THEME[colorScheme]
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className="flex-1 items-center justify-center px-4 gap-5">
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <View className="mb-1 items-center">
        <View
          className="mb-5 h-20 w-20 items-center justify-center rounded-2xl shadow-lg"
          style={{ backgroundColor: theme.primary }}
        >
          <Dumbbell size={40} color={theme.primaryForeground} />
        </View>
        <Text className="text-3xl font-bold" style={{ color: theme.foreground }}>
          GainsFlow
        </Text>
        <Text className="text-lg" style={{ color: theme.mutedForeground }}>
          Track. Progress. Dominate.
        </Text>
      </View>
      <View className="w-full justify-center">
        <View style={{ position: 'absolute', left: 12, zIndex: 1 }}>
          <Mail size={18} color={theme.mutedForeground} />
        </View>
        <Input
          className="pl-10"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoComplete="email"
          placeholder="Email"
        />
      </View>

      <View className="w-full justify-center">
        <View style={{ position: 'absolute', left: 12, zIndex: 1 }}>
          <Lock size={18} color={theme.mutedForeground} />
        </View>
        <Input
          className="pl-10 pr-10"
          placeholder="Password"
          secureTextEntry={!showPassword}
          textContentType="password"
          autoComplete="password"
        />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}
          onPress={() => setShowPassword(prev => !prev)}
          style={{ position: 'absolute', right: 12, zIndex: 1 }}
        >
          {showPassword ? (
            <EyeOff size={20} color={theme.mutedForeground} />
          ) : (
            <Eye size={20} color={theme.mutedForeground} />
          )}
        </Pressable>
      </View>
      <Button className="w-full" onPress={() => router.replace('/(tabs)')}>
        <Text className="font-semibold">Sign in</Text>
      </Button>
      <View className="my-2 flex-row items-center gap-3">
        <View className="h-px flex-1" style={{ backgroundColor: theme.border }} />
        <Text style={{ color: theme.mutedForeground }}>or</Text>
        <View className="h-px flex-1" style={{ backgroundColor: theme.border }} />
      </View>
      <Button className="w-full" variant="outline" onPress={() => router.replace('/(tabs)')}>
        <Text>Continue as a guest</Text>
      </Button>
      <Text style={{ color: theme.mutedForeground }}>
        Don't have an account? <Text>Sign up</Text>
      </Text>
    </View>
  )
}
