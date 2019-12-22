# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## API Endpoints
### POST Request
Format:

```sh
URL: http://localhost:3002/description
Headers: Content-Type: "application/json"
Body:
{
  "item_numbe": "1111",
  "list_date": "Oct 21, 2019 07:38:38 PDT",
  "item_spec": {
    "condition": "New",
    "brand": "Test Brand",
    "type": "Test Type"
}
```

### GET Request
Format:

```sh
URL: http://localhost:3002/description?prod_id=product_id
```
### PUT Request
Format:

```sh
URL: http://localhost:3002/description?prod_id=product_id
Headers: Content-Type: "application/json"
Body:
{
  "item_spec": {
    "brand": String
  }
}
```
### DELETE Request
Format:

```sh
URL: http://localhost:3002/description?prod_id=product_id
```


## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

