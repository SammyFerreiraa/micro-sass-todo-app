'use client'

import DashboardSidebar from '@/components/dashboard/sidebar'
import { usePathname } from 'next/navigation'
import { MixerHorizontalIcon, HomeIcon } from '@radix-ui/react-icons'

export default function MainSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <DashboardSidebar>
      <DashboardSidebar.Header>
        <DashboardSidebar.Header.Title>
          Micro Sass
        </DashboardSidebar.Header.Title>
      </DashboardSidebar.Header>
      <DashboardSidebar.Main className="flex flex-grow flex-col">
        <DashboardSidebar.Nav>
          <DashboardSidebar.Nav.Main>
            <DashboardSidebar.Nav.NavLink href="/app" active={isActive('/app')}>
              <HomeIcon className="mr-3 h-3 w-3" />
              Tarefas
            </DashboardSidebar.Nav.NavLink>
            <DashboardSidebar.Nav.NavLink
              href="/app/settings"
              active={isActive('/app/settings')}
            >
              <MixerHorizontalIcon className="mr-3 h-3 w-3" />
              Configurações
            </DashboardSidebar.Nav.NavLink>
          </DashboardSidebar.Nav.Main>
        </DashboardSidebar.Nav>
        <DashboardSidebar.Nav className="mt-auto">
          <DashboardSidebar.Nav.Header>
            <DashboardSidebar.Nav.Header.Title>
              Links extras
            </DashboardSidebar.Nav.Header.Title>
          </DashboardSidebar.Nav.Header>
          <DashboardSidebar.Nav.Main>
            <DashboardSidebar.Nav.NavLink href="/">
              Precisa de Ajuda?
            </DashboardSidebar.Nav.NavLink>
            <DashboardSidebar.Nav.NavLink href="/">
              Site
            </DashboardSidebar.Nav.NavLink>
          </DashboardSidebar.Nav.Main>
        </DashboardSidebar.Nav>
      </DashboardSidebar.Main>
      <DashboardSidebar.Footer>
        <h1>User</h1>
      </DashboardSidebar.Footer>
    </DashboardSidebar>
  )
}
