import { cn } from '@/lib/utils'

export type DashboardPageGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function DashboardPage({
  className,
  children,
}: DashboardPageGenericProps) {
  return <section className={cn(['h-screen', className])}>{children}</section>
}

function DashboardPageHeader({
  className,
  children,
}: DashboardPageGenericProps) {
  return (
    <header
      className={cn([
        'flex items-center justify-between border-b border-border px-6 py-3.5',
        className,
      ])}
    >
      {children}
    </header>
  )
}

function DashboardPageHeaderTitle({
  className,
  children,
}: DashboardPageGenericProps) {
  return (
    <span
      className={cn(['text-sm uppercase text-muted-foreground', className])}
    >
      {children}
    </span>
  )
}

function DashboardPageHeaderNav({
  className,
  children,
}: DashboardPageGenericProps) {
  return <nav className={cn(['', className])}>{children}</nav>
}

function DashboardPageMain({ className, children }: DashboardPageGenericProps) {
  return <main className={cn(['p-6', className])}>{children}</main>
}

DashboardPage.Header = DashboardPageHeader
DashboardPageHeader.Nav = DashboardPageHeaderNav
DashboardPageHeader.Title = DashboardPageHeaderTitle
DashboardPage.Main = DashboardPageMain

export default DashboardPage
