import type {FastifyInstance} from 'fastify'
import type {ZodTypeProvider} from 'fastify-type-provider-zod'
import {dayjs} from '../lib/dayjs'
import {z} from 'zod'
import {prisma} from '../lib/prisma'
import {getMailClient} from '../lib/mail'
import {env} from './env'


export async function createActivites(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/trips/tripId/actovotoes',
    {
      schema: {
        body: z.object({
          destination: z.string().min(4),
          starts_at: z.coerce.date(),
          ends_at: z.coerce.date(),
          owner_name: z.string(),
          owner_email: z.string().email(),
          emails_to_invite: z.array(z.string().email()),
        }),
      },
    },
    async (request) => {
      const {
        destination,
        starts_at,
        ends_at,
        owner_name,
        owner_email,
        emails_to_invite,
      } = request.body;

      
      return { tripId: trip.id };
    },
  );
}
