'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'

import { useForm } from 'react-hook-form'
import { toast } from '@/components/ui/use-toast'

export default function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('nodemailer', { email: data.email, redirect: false })
      toast({
        title: 'Magic Link Sent',
        description: 'Check your email for the magic link',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong, please try again',
      })
    }
  })

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Magic Link</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              autoComplete="off"
              placeholder="email@example.com"
              required
              type="email"
              {...form.register('email')}
            />
          </div>
          <Button
            className="w-full"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? 'Sending...' : 'Send magic link'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
