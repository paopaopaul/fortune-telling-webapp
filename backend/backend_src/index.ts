import fastify, { FastifyRequest, FastifyReply } from 'fastify';
import cors from '@fastify/cors';
import lots from './lots';

const server = fastify({ logger: true });
server.register(cors, { origin: "http://localhost:5173", methods:["GET", "POST"],});

//draw lot
server.get('/api/draw-lot', async (_, reply) => {
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
server.setErrorHandler((error, _: FastifyRequest, reply: FastifyReply) => {
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
    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001; // Ensure process.env.PORT is parsed to a number
    await server.listen({ port, host: '0.0.0.0' }); // Host set to '0.0.0.0'
    console.log(`Server is running at http://localhost:${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
