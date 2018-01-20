import { schema } from 'normalizr'

const Todos = new schema.Entity('todos')

const User = new schema.Entity('users', {
  todos: [ Todos ]
})

const UserListSchema = [ User ]

export {UserListSchema}
