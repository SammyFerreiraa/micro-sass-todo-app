import { DashboardPage } from '@/components/dashboard/page'

export default async function AppPage() {
  return (
    <DashboardPage>
      <DashboardPage.Header>
        <DashboardPage.Header.Title>Tarefas</DashboardPage.Header.Title>
      </DashboardPage.Header>
      <DashboardPage.Main>
        <h1>Tarefas</h1>
      </DashboardPage.Main>
    </DashboardPage>
  )
}
