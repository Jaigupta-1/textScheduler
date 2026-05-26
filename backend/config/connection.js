// ESM
import fastifyPlugin from "fastify-plugin";
import fastifyMongo from "@fastify/mongodb";

/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */
async function dbConnector(fastify, options) {
  fastify.register(fastifyMongo, {
    url: options.url,
  });
  console.log(fastify.mongo);
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
export default fastifyPlugin(dbConnector);
// "dbConnector ko Fastify ka proper plugin bana do"

// "Ye special plugin hai,
// isko globally share karo"

// Main App
//    ↓
// register(dbConnector)
//    ↓
// dbConnector runs
//    ↓
// register(fastifyMongo)
//    ↓
// MongoDB plugin runs
//    ↓
// fastify.mongo create hota hai