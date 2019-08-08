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

interface schemaFrequency {
  type: string[]
  mode: Array<string | null>
  description: Array<string | null>
  fields: Array<schemaFrequency | null>
}

export function generateSchema (input: object | object[]): tableSchema {
  if (Array.isArray(input)) {
    const listSchemas = getListSchema(input)
    const frequencies = listSchemaFreq(listSchemas)
    const conciled = frequencyConciliation(frequencies)
    return { fields: conciled }
  } else if (typeof input === 'object') {
    return { fields: bigquery(input) }
  } else {
    throw new TypeError(`Type ${typeof input} is not supported`)
  }
}

function getListSchema (objArray: object[]): bigquerySchemaField[][] {
  const schemas = []
  objArray.forEach((obj): void => {
    schemas.push(bigquery(obj))
  })
  return schemas
}

function listSchemaFreq (schemaArray: bigquerySchemaField[][], typesPrev?: object): object {
  const types = typesPrev || {}
  schemaArray.forEach((record): void => {
    record.forEach((schema): void => {
      if (Object.keys(types).includes(schema['name'])) {
        types[schema.name].type.push(schema.type)
        types[schema.name].mode.push(schema.mode)
        types[schema.name].description.push(schema.description ? schema.description : null)
        types[schema.name].fields = schema.fields ? listSchemaFreq([schema.fields], types[schema.name]['fields'] ? types[schema.name]['fields'] : null) : types[schema.name].fields
      } else {
        types[schema.name] = {
          type: [schema.type],
          mode: [schema.mode],
          description: schema.description ? [schema.description] : [null],
          fields: schema.fields ? listSchemaFreq([schema.fields]) : []
        }
      }
    })
  })
  return types
}

function frequencyConciliation (frequencies: any): bigquerySchemaField[] {
  const consensus = []
  for (let [key, values] of Object.entries(frequencies)) {
    const entry = {}
    for (let [key1, values1] of Object.entries(values)) {
      if (key1 === 'fields') {
        if (frequencyConciliation(values1).length > 0) {
          entry['fields'] = frequencyConciliation(values1)
        }
      } else {
        let unique = new Set(values1)
        if (unique.size > 1) {
          if (key1 === 'type') {
            entry['type'] = 'STRING'
          } else if (key1 === 'mode') {
            entry['mode'] = 'NULLABLE'
          } else if (key1 === 'description') {
            entry['description'] = null
          }
        } else {
          entry[key1] = values1[0]
        }
      }
      if (entry['type'] === 'DATE') {
        entry['type'] = 'TIMESTAMP'
      } else if (entry['type'] === 'FLOAT') {
        entry['type'] = 'STRING'
      }
    }
    entry['name'] = key
    consensus.push(entry)
  }
  return consensus
}
