import Link from 'next/link'

import { cn } from '@/lib/utils'

type DashboardSidebarGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function DashboardSidebar({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return (
    <aside
      className={cn([
        'flex flex-col space-y-6 border-r border-border',
        className,
      ])}
    >
      {children}
    </aside>
  )
}

function DashboardSidebarHeader({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return (
    <header className={cn(['border-b border-border px-6 py-3', className])}>
      {children}
    </header>
  )
}

function DashboardSidebarHeaderTitle({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return <h2 className={cn(['', className])}>{children}</h2>
}

function DashboardSidebarMain({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return <main className={cn(['px-3', className])}>{children}</main>
}

function DashboardSidebarNav({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return <nav className={cn(['', className])}>{children}</nav>
}

function DashboardSidebarNavHeader({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return <header className={cn(['', className])}>{children}</header>
}

function DashboardSidebarNavHeaderTitle({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return (
    <div
      className={cn([
        'ml-3 text-xs uppercase text-muted-foreground',
        className,
      ])}
    >
      {children}
    </div>
  )
}

function DashboardSidebarNavMain({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return <main className={cn(['flex flex-col', className])}>{children}</main>
}

type DashboardSidebarNavLinkProps = {
  href: string
  active?: boolean
}

function DashboardSidebarNavLink({
  className,
  children,
  href,
  active,
}: DashboardSidebarGenericProps<DashboardSidebarNavLinkProps>) {
  return (
    <Link
      href={href}
      className={cn([
        'flex items-center rounded-md px-3 py-2 text-xs',
        active && 'bg-secondary',
        className,
      ])}
    >
      {children}
    </Link>
  )
}

function DashboardSidebarFooter({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return (
    <footer className={cn(['mt-auto border-t border-border p-6', className])}>
      {children}
    </footer>
  )
}

DashboardSidebar.Header = DashboardSidebarHeader
DashboardSidebarHeader.Title = DashboardSidebarHeaderTitle

DashboardSidebar.Main = DashboardSidebarMain

DashboardSidebar.Nav = DashboardSidebarNav
DashboardSidebarNav.Header = DashboardSidebarNavHeader
DashboardSidebarNavHeader.Title = DashboardSidebarNavHeaderTitle

DashboardSidebarNav.Main = DashboardSidebarNavMain
DashboardSidebarNav.NavLink = DashboardSidebarNavLink

DashboardSidebar.Footer = DashboardSidebarFooter

export default DashboardSidebar
