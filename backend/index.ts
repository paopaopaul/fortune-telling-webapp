import fastify, { FastifyRequest, FastifyReply } from 'fastify';
import cors from '@fastify/cors';
import lots from './lots';

const server = fastify({ logger: true });
server.register(cors, { origin: "http://localhost:5173", methods:["GET", "POST"],});

//draw lot
server.get('/api/draw-lot', async (request, reply) => {
  try {

    //throw new Error("Simulated server error");

    const randomLot = lots[Math.floor(Math.random() * lots.length)];
    return reply.code(200).send({ lot: randomLot });  // Respond with success
  } catch (err) {
    // error handle
    server.log.error(err);
    return reply.code(500).send({ error: "Server Error" });  // Send  error to client
  }
});

// Global error handler
server.setErrorHandler((error, request: FastifyRequest, reply: FastifyReply) => {
  server.log.error(error);  // Log the error

  // Respond with a generic error message
  reply.status(500).send({
    error: 'Something went wrong on the server.',
    details: error.message,
  });
});

// Start server
const start = async () => {
  try {
    await server.listen({ port: 3001 });
    console.log('Server is running at http://localhost:3001');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
