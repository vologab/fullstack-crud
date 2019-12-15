

## API example

Built with [Fastify](https://github.com/fastify/fastify),  [fastify-mongoose-api](https://github.com/jeka-kiselyov/fastify-mongoose-api) and [mongoose-sequence plugin](https://github.com/ramiel/mongoose-sequence) (probably you don't need this)

```bash
npm i
```

Provide ENV vars from .env.sample

```bash 
cp .env .env.sample
```

```
# App
PORT=3000

# Db
MONGODB_URL=mongodb://localhost/arrival
```

```bash
npm start
```



## CRUDL API

### Create

```
POST http://localhost:3000/tracks HTTP/1.1
content-type: application/json

{
    "name": "Millbrook",
		"description": "Millbrook city course race track",
		"length": {
			"unit": "km",
			"value": 7.4
		},
		"cars": [{
			"id": "2",
			"code": "rdb1",
			"transmission": "automatic",
			"ai": "enabled",
			"max-speed": {
				"unit": "mps",
				"value": 110.12121212
			}
		}, {
			"id": "1",
			"code": "rdb3",
			"transmission": "automatic",
			"ai": "disabled",
			"max-speed": {
				"unit": "mps",
				"value": 120.967
			}
		}]
}

```

## Read
```
GET http://localhost:3000/tracks/1
```

## Update
```
PUT http://localhost:3000/tracks/1
content-type: application/json

{
       "name": "Millbrookn 2",
		"description": "Millbrook city course race track 2",
		"length": {
			"unit": "km",
			"value": 7.4
		},
		"cars": [{
			"id": "2",
			"code": "rdb1",
			"transmission": "automatic",
			"ai": "enabled",
			"max-speed": {
				"unit": "mps",
				"value": 110.12121212
			}
		}, {
			"id": "1",
			"code": "rdb3",
			"transmission": "automatic",
			"ai": "disabled",
			"max-speed": {
				"unit": "mps",
				"value": 120.967
			}
		}] 
}

```

## Patch
```
PATCH http://localhost:3000/tracks/1
content-type: application/json

{
       "name": "Millbrookn 3",
}

```

## List with filtering

```
GET http://localhost:3000/tracks?filter=name%3DMillbrookn%203
```

## Delete
```
DELETE http://localhost:3000/tracks/1
```