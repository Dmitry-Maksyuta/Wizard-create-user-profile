import { rootReducer } from '../../root-reducer'

export interface ListItem {
  api: string
  login: string
  password: string
  processor: string
  repository: string
  name: string
  active: boolean
  select: boolean
}

export interface Slice {
  list: ListItem[]
}

export type RootState = ReturnType<typeof rootReducer>
