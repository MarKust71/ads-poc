'use client'

import { AuthCardWrapper } from '@/components/auth/auth-card-wrapper'
import { useForm } from 'react-hook-form'
import { RegisterSchema } from '@/schemas'
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
import { useState, useTransition } from 'react'
import { register } from '@/actions/register'
import { AuthBackButton } from '@/components/auth/auth-back-button'
import { useRouter } from 'next/navigation'

export const AuthRegisterForm = () => {
  const [isPending, startTrasition] = useTransition()
  const router = useRouter()

  const [error, setError] = useState('')

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError('')
    startTrasition(() => {
      register(values).then((response) => {
        setError(response?.error || '')

        if (response?.success) {
          router.push('/auth/login')
        }
      })
    })
  }

  const backButtonLabel = 'Already have an account?'
  const backButtonHref = '/auth/login'

  return (
    <AuthCardWrapper
      headerLabel={'Request access to Qiwa Decision Support Center'}
      subHeaderLabel={
        'Enter your working email to request access to Qiwa Decision Support Center. You’ll be notified by email as soon as the request is approved.'
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
              Send request
            </Button>
          </form>
        </Form>
      </>
    </AuthCardWrapper>
  )
}
