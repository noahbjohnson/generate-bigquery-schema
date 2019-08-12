type propertyMode = 'REPEATED' | 'NULLABLE'

function getPropertyMode (value): propertyMode {
  return Array.isArray(value) ? 'REPEATED' : 'NULLABLE'
}

type propertyType = 'TIMESTAMP' | 'RECORD' | 'BOOLEAN' | 'DATE' | 'TIMESTAMP' | 'INTEGER' | 'FLOAT' | 'STRING'

function getPropertyType (value): propertyType {
  if (Array.isArray(value)) {
    return getPropertyType(value[0])
  }

  if (value instanceof Date) return 'TIMESTAMP'
  if (typeof value === 'object') return 'RECORD'
  if (typeof value === 'boolean') return 'BOOLEAN'
  if (typeof value === 'string') {
    if (!isNaN((new Date(value)).getTime())) return 'TIMESTAMP'
  }

  if (!isNaN(value)) {
    return Number.isInteger(parseFloat(value)) ? 'INTEGER' : 'FLOAT'
  }

  return 'STRING'
}

interface entryType {
  name: string
  type: propertyType
  mode: propertyMode
  fields?: entryType[]
}

export function processFields (data: object): entryType[] {
  if (typeof data !== 'object') {
    throw new TypeError('Must pass an object')
  } else {
    return Object.keys(data).map(function (key): entryType {
      let entry
      let value = data[key]
      let type = getPropertyType(data[key])
      let mode = getPropertyMode(data[key])
      if (type === 'RECORD') {
        entry = {
          name: key,
          type: type,
          mode: mode,
          fields: processFields(value)
        }
      } else {
        entry = {
          name: key,
          type: type,
          mode: mode
        }
      }
      return entry
    })
  }
}