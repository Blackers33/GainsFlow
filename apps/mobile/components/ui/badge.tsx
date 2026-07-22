import type { ComponentProps } from 'react'
import { View } from 'react-native'
import { Text } from '@/components/ui/text'
import { cn } from '@/lib/utils'

type BadgeProps = Omit<ComponentProps<typeof View>, 'children'> & {
  color: string
  children: string
}

function Badge({ color, className, children, ...props }: BadgeProps) {
  return (
    <View
      className={cn('rounded-full px-2 py-0.5', className)}
      style={{ backgroundColor: `${color}33` }}
      {...props}
    >
      <Text className="text-xs font-medium" style={{ color }}>
        {children}
      </Text>
    </View>
  )
}

export { Badge }
export type { BadgeProps }
