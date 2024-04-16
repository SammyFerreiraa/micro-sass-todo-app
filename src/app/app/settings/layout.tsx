import DashboardPage from '@/components/dashboard/page'
import { PropsWithChildren } from 'react'
import { SettingsSidebar } from './_components/settings-sidebar'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <DashboardPage>
      <DashboardPage.Header>
        <DashboardPage.Header.Title>Configurações</DashboardPage.Header.Title>
      </DashboardPage.Header>
      <DashboardPage.Main>
        <div className="container max-w-screen-xl">
          <div className="grid grid-cols-[16rem_1fr] gap-12">
            <SettingsSidebar />
            <div>{children}</div>
          </div>
        </div>
      </DashboardPage.Main>
    </DashboardPage>
  )
}
