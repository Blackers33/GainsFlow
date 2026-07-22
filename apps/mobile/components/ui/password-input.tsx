import * as React from 'react'
import { Pressable, type TextInput, View } from 'react-native'
import { Input } from '@/components/ui/input'
import { Eye } from '@/lib/icons/eye'
import { EyeOff } from '@/lib/icons/eye-off'
import { cn } from '@/lib/utils'

type PasswordInputProps = Omit<React.ComponentProps<typeof TextInput>, 'secureTextEntry'>

function PasswordInput({ className, ...props }: PasswordInputProps) {
  const [isRevealed, setIsRevealed] = React.useState(false)

  return (
    <View className="relative justify-center">
      <Input secureTextEntry={!isRevealed} className={cn('pr-10', className)} {...props} />
      <Pressable
        onPressIn={() => setIsRevealed(true)}
        onPressOut={() => setIsRevealed(false)}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel={isRevealed ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
        className="absolute inset-y-0 right-3 justify-center"
      >
        {isRevealed ? (
          <EyeOff size={18} className="text-muted-foreground" />
        ) : (
          <Eye size={18} className="text-muted-foreground" />
        )}
      </Pressable>
    </View>
  )
}

export { PasswordInput }
