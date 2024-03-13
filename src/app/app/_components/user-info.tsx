'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'

type userInfoProps = {
  user: Session['user']
}

export default function UserInfo({ user }: userInfoProps) {
  if (!user) return
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Avatar>
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <span>{user?.email}</span>
      <Button variant={'outline'} onClick={() => signOut()}>
        Sign Out
      </Button>
    </div>
  )
}
