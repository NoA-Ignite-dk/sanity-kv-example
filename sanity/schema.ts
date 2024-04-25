import { type SchemaTypeDefinition } from 'sanity'

import redirection from './schemaTypes/redirection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [redirection],
}
