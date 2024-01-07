import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { AuthCardHeader } from '@/components/auth/auth-card-header'

type CardWrapperProps = {
  children: React.ReactNode
  headerLabel: string
  subHeaderLabel?: string
}

export const AuthCardWrapper = ({
  children,
  headerLabel,
  subHeaderLabel,
}: CardWrapperProps) => {
  return (
    <Card className={'w-[552px] shadow-md bg-card p-8 rounded-lg'}>
      <CardHeader>
        <AuthCardHeader label={headerLabel} />

        {subHeaderLabel && <p className={'text-sm'}>{subHeaderLabel}</p>}
      </CardHeader>

      <CardContent>
        <div className={'flex flex-col'}>{children}</div>
      </CardContent>
    </Card>
  )
}
