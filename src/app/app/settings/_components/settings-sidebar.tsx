'use client'

import DashboardSidebar from '@/components/dashboard/sidebar'
import { usePathname } from 'next/navigation'

export function SettingsSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }
  return (
    <aside>
      <DashboardSidebar.Nav>
        <DashboardSidebar.Nav.Main>
          <DashboardSidebar.Nav.NavLink
            href="/app/settings"
            active={isActive('/app/settings')}
          >
            My Profile
          </DashboardSidebar.Nav.NavLink>
          <DashboardSidebar.Nav.NavLink
            href="/app/settings/theme"
            active={isActive('/app/settings/theme')}
          >
            Theme
          </DashboardSidebar.Nav.NavLink>
          <DashboardSidebar.Nav.NavLink
            href="/app/settings/billing"
            active={isActive('/app/settings/billing')}
          >
            Billing
          </DashboardSidebar.Nav.NavLink>
        </DashboardSidebar.Nav.Main>
      </DashboardSidebar.Nav>
    </aside>
  )
}
