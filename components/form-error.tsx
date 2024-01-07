import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

type FormErrorProps = {
  message?: string
}

export const FormError = ({ message }:FormErrorProps) => {
  if (!message) return null

  return (
    <div
      className={
        'flex flex-row text-red-500 text-sm p-4 mb-6 bg-destructive/15 rounded-md shadow-[0px_0px_16px_0px_hsla(0,66%,60%,0.2)_inset]'
      }
    >
      <div className={'pr-4'}>
        <ExclamationTriangleIcon className={'w-6 h-6'} />
      </div>

      <p className={'text-card-foreground'}>{message}</p>
    </div>
  )
}
