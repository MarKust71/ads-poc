import { Button } from '@/components/ui/button'
import Link from 'next/link'

type AuthBackButtonProps = {
  label: string
  href: string
}

export const AuthBackButton = ({ label, href }: AuthBackButtonProps) => {
  return (
    <Button variant={'link'} className={'font-normal'} size={'sm'} asChild>
      <Link href={href}>{label}</Link>
    </Button>
  )
}
