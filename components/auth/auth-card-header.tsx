import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Inter({
  subsets: ['latin'],
  weight: ['600'],
})

type CardHeaderProps = {
  label: string
}

export const AuthCardHeader = ({ label }: CardHeaderProps) => {
  return (
    <div
      className={cn(
        'w-full flex flex-col gap-y-4 items-start justify-start text-3xl mb-2',
        font.className
      )}
    >
      <h1>{label}</h1>
    </div>
  )
}
