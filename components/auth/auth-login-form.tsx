'use client'

import { AuthCardWrapper } from '@/components/auth/auth-card-wrapper'
import { useForm } from 'react-hook-form'
import { LoginSchema } from '@/schemas'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FormError } from '@/components/form-error'
import { login } from '@/actions/login'
import { useState, useTransition } from 'react'
import { AuthBackButton } from '@/components/auth/auth-back-button'

export const AuthLoginForm = () => {
  const [isPending, startTrasition] = useTransition()

  const [error, setError] = useState('')

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('')
    startTrasition(() => {
      login(values).then((response) => {
        setError(response?.error || '')
      })
    })
  }

  const backButtonLabel: string = 'Forgot password?'
  const backButtonHref: string = '/auth/reset'

  return (
    <AuthCardWrapper
      headerLabel={'Welcome!'}
      subHeaderLabel={
        'Enter your email address and password to get access to your account'
      }
    >
      <>
        <FormError message={error} />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-6'}>
            <div className={'space-y-4'}>
              <FormField
                control={form.control}
                name={'email'}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={'Email'}
                        type={'email'}
                        autoComplete={'username'}
                        disabled={isPending}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={'password'}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={'Password'}
                        type={'password'}
                        autoComplete={'current-password'}
                        disabled={isPending}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className={'flex flex-row justify-between'}>
              {'remember me'}

              <AuthBackButton label={backButtonLabel} href={backButtonHref} />
            </div>

            <Button type={'submit'} className={'w-full'} disabled={isPending}>
              Login
            </Button>
          </form>
        </Form>
      </>
    </AuthCardWrapper>
  )
}
