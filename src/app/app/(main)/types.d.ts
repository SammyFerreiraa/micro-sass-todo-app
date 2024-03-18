import { ReturnTypeWithoutPromise } from '@/types/return-types-without-promise'
import { getUserTodos } from './actions'

export type Todo = ReturnTypeWithoutPromise<typeof getUserTodos>[0]
