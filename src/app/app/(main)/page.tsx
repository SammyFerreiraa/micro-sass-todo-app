import { DashboardPage } from '@/components/dashboard/page'
import { TodoDataTable } from './_components/todo-data-table'
import { Button } from '@/components/ui/button'
import { TodoUpsertSheet } from './_components/todo-upsert-sheet'
import { PlusIcon } from '@radix-ui/react-icons'

export default async function AppPage() {
  return (
    <DashboardPage>
      <DashboardPage.Header>
        <DashboardPage.Header.Title>Tarefas</DashboardPage.Header.Title>
        <DashboardPage.Header.Nav>
          <TodoUpsertSheet>
            <Button variant={'outline'} size={'sm'}>
              <PlusIcon className="mr-2 h-4 w-4" />
              Add Todo
            </Button>
          </TodoUpsertSheet>
        </DashboardPage.Header.Nav>
      </DashboardPage.Header>
      <DashboardPage.Main>
        <TodoDataTable />
      </DashboardPage.Main>
    </DashboardPage>
  )
}
