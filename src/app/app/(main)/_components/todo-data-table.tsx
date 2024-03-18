'use client'

import * as React from 'react'
import { CaretSortIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Todo } from '../types'

const data: Todo[] = [
  {
    id: '1',
    title: 'Complete React project',
    createdAt: new Date('2022-09-01'),
    updatedAt: new Date('2022-09-05'),
    finishedAt: new Date('2022-09-10'),
  },
  {
    id: '2',
    title: 'Update project documentation',
    createdAt: new Date('2022-09-02'),
    updatedAt: new Date('2022-09-06'),
  },
  {
    id: '3',
    title: 'Review pull requests',
    createdAt: new Date('2022-09-03'),
    updatedAt: new Date('2022-09-07'),
    finishedAt: new Date('2022-09-08'),
  },
  {
    id: '4',
    title: 'Plan next sprint',
    createdAt: new Date('2022-09-04'),
    updatedAt: new Date('2022-09-08'),
  },
  {
    id: '5',
    title: 'Refactor backend code',
    createdAt: new Date('2022-09-05'),
    updatedAt: new Date('2022-09-09'),
    finishedAt: new Date('2022-09-11'),
  },
  {
    id: '6',
    title: 'Optimize database queries',
    createdAt: new Date('2022-09-06'),
    updatedAt: new Date('2022-09-10'),
  },
  {
    id: '7',
    title: 'Implement caching strategy',
    createdAt: new Date('2022-09-07'),
    updatedAt: new Date('2022-09-11'),
  },
  {
    id: '8',
    title: 'Setup CI/CD pipeline',
    createdAt: new Date('2022-09-08'),
    updatedAt: new Date('2022-09-12'),
    finishedAt: new Date('2022-09-14'),
  },
]

export const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const { finishedAt } = row.original
      const status: 'done' | 'waiting' = finishedAt ? 'done' : 'waiting'
      const statusVariant: 'outline' | 'secondary' = finishedAt
        ? 'outline'
        : 'secondary'

      return <Badge variant={statusVariant}>{status}</Badge>
    },
  },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Title
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue('title')}</div>,
  },
  {
    accessorKey: 'createdAt',
    header: () => <div className="text-right">createdAt</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          {row.original.createdAt.toLocaleDateString()}
        </div>
      )
    },
  },

  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const todo = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(todo.id)}
            >
              Copy Todo ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Mark as done</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function TodoDataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
