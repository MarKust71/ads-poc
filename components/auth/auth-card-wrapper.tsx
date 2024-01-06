'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { AuthCardHeader } from '@/components/auth/auth-card-header'

type CardWrapperProps = {
  children: React.ReactNode
  headerLabel: string
  subHeaderLabel?: string
  backButtonLabel: string
  backButtonHref: string
}

export const AuthCardWrapper = ({
  children,
  backButtonHref,
  backButtonLabel,
  headerLabel,
  subHeaderLabel,
}: CardWrapperProps) => {
  return (
    <Card className={'w-[552px] shadow-md bg-card p-8 rounded-lg'}>
      <CardHeader>
        <AuthCardHeader label={headerLabel} />

        {subHeaderLabel && <p className={'text-sm'}>{subHeaderLabel}</p>}
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  )
}
