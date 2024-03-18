'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useRef } from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Todo } from '../types'

type TodoUpsertSheetProps = {
  children?: React.ReactNode
  defaultValue?: Todo
}

export function TodoUpsertSheet({
  children,
  defaultValue,
}: TodoUpsertSheetProps) {
  const ref = useRef<HTMLDivElement>(null)

  const form = useForm()

  const onSubmit = form.handleSubmit((data) => {
    console.log(data)
  })

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div ref={ref}>{children}</div>
      </SheetTrigger>
      <SheetContent>
        <Form {...form}>
          <form onSubmit={onSubmit} className="h-screen space-y-8">
            <SheetHeader>
              <SheetTitle>Upsert Todo</SheetTitle>
              <SheetDescription>
                Add or edit your todo items here. Click save when you&apos;re
                finished.
              </SheetDescription>
            </SheetHeader>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your task title" {...field} />
                  </FormControl>
                  <FormDescription>
                    This will be the visible title of your task.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SheetFooter className="mt-auto">
              <SheetClose />
              <Button type="submit">Save changes</Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
