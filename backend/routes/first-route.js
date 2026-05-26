async function routes(fastify, options) {
  // console.log(options)
  fastify.get("/our/first", (request, reply) => {
    // reply.send("This is my first router");
    return {
      message: "This is my first router",
      email: "yogeshs357@gmail.com",
      ...options,
    };
  });
}

export default routes;
