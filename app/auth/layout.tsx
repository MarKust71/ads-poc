import { ThemeProvider } from '@/components/theme-provider'

type AuthLayoutProps = {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div
      className={
        "h-full flex items-center justify-center bg-[url('/svgs/auth-background-shape.svg')]"
      }
    >
      {children}
    </div>
  )
}

export default AuthLayout
