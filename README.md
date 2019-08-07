# generate-bigquery-schema
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ftrinity-insight%2Fgenerate-bigquery-schema.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Ftrinity-insight%2Fgenerate-bigquery-schema?ref=badge_shield)


Generate a BigQuery schema from an object or array of objects

Uses [generate-schema](https://github.com/nijikokun/generate-schema) to create individual schemas. 
This package serves as a wrapper around generate-schema for extensibility and our specific use cases. 

## Install
`npm install @trinity-insight/generate-bigquery-schema`

## Usage
### Single Object
```js
const gbs = require('generate-bigquery-schema')

const singleObject = {
  stringKey: "string",
  numberKey: 88,
  objectKey: {
    cool: "we can nest things"
  }
}
console.log(gbs.generateSchema(singleObject))
// { fields:
//    [ { name: 'stringKey', type: 'STRING', mode: 'NULLABLE' },
//      { name: 'numberKey', type: 'INTEGER', mode: 'NULLABLE' },
//      { name: 'objectKey',
//        type: 'RECORD',
//        mode: 'NULLABLE',
//        fields: [Array] } ] }
```
### Object Array
```js
const multipleObjects = [
  {
    foo: 'bar',
    number: '4'
  },
  {
    foo: 'bar',
    number: 4
  }
]

console.log(gbs.generateSchema(multipleObjects))
// { fields:
//    [ { type: 'STRING',
//        mode: 'NULLABLE',
//        description: null,
//        name: 'foo' },
//      { type: 'INTEGER',
//        mode: 'NULLABLE',
//        description: null,
//        name: 'number' } ] }


```

## Development

### Installing
1. `git clone https://github.com/trinity-insight/generate-bigquery-schema.git`
2. `npm install`

### Building to JS
1. `npm run build`

### Linting (StandardJS)
1. `npm run lint`

### Testing (Mocha)
1. `npm test`

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ftrinity-insight%2Fgenerate-bigquery-schema.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Ftrinity-insight%2Fgenerate-bigquery-schema?ref=badge_large)

