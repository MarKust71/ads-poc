import { AuthCardWrapper } from '@/components/auth/auth-card-wrapper'

export const AuthLoginForm = () => {
  return (
    <AuthCardWrapper
      headerLabel={'Welcome!'}
      subHeaderLabel={
        'Enter your email address and password to get access to your account'
      }
      backButtonLabel={'Create an account'}
      backButtonHref={'/auth/register'}
    >
      {'Login Form'}
    </AuthCardWrapper>
  )
}
