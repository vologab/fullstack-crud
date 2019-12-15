const Fastify = require('fastify');
const fastifyMongooseAPI = require('fastify-mongoose-api');
const fastifyFormbody = require('fastify-formbody');
const fastifyCors = require('fastify-cors');

const { dbConnection } = require('./db');
require('./track.schema')(dbConnection);

async function bootstrap() {
  try {
    const fastify = Fastify();
    fastify.register(fastifyFormbody);
    fastify.register(fastifyCors); // Better to define CORS headers on reverse proxy, but it is acceptable for DEMO
    fastify.register(fastifyMongooseAPI, {
      models: dbConnection.models,
      prefix: '/api/',
      setDefaults: true,
      methods: ['list', 'get', 'post', 'patch', 'put', 'delete', 'options'],
    });

    await fastify.ready();
    const PORT = process.env.PORT || 3000;
    const address = await fastify.listen(PORT, '0.0.0.0');
    console.log(`Server listening on address: ${address}`);
  } catch (err) {
    console.error(`Can't start server: ${err.message}`);
  }
}

bootstrap();
