import Fastify from "fastify";
import firstRouter from "./routes/first-route.js";
import dbConnector from "./config/connection.js";
const fastify = new Fastify({
  logger: true,
});

// fastify.register(plugin, options);
fastify.register(dbConnector, {
  url: "mongodb://127.0.0.1:27017/test_database",
});
fastify.register(firstRouter, {
  prefix: "/app",
  sum: "4",
  name: "kulu manalu",
});

fastify.get("/user", (request, reply) => {
  return reply.send({ name: "yogesh", email: "yogeshs38@gmail.com" });
});

(async function () {
  try {
    await fastify.listen({
      port: 8000,
      host: "0.0.0.0",
    });
  } catch (e) {
    fastify.log.error(e);
    process.exit(1);
  }
})();
