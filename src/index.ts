import { bigquery } from 'generate-schema'

interface bigquerySchemaField {
  name: string
  type: string
  mode?: string
  fields?: bigquerySchemaField[]
  description?: string
}

interface tableSchema {
  fields: bigquerySchemaField[]
}

export function generateSchema (input: object | object[]): tableSchema {
  if (Array.isArray(input)) {
    throw new Error('Arrays are not yet implemented')
  } else if (typeof input === 'object') {
    return { fields: bigquery(input) }
  } else {
    throw new TypeError(`Type ${typeof input} is not supported`)
  }
}