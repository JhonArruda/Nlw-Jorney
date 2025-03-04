import cors from "@fastify/cors"
import fastify from "fastify"
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod"
import { confirmParticipants } from "./routes/confirm-participant"
import { confirmTrip } from "./routes/confirm-trip"
import { createActivity } from "./routes/create-activity"
import { createLink } from "./routes/create-link"
import { createTrip } from "./routes/create-trip"
import { getActivities } from "./routes/get-activites"
import { getLinks } from "./routes/get-links"


export const app = fastify()

app.register(cors, {
    origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createTrip)
app.register(confirmTrip)
app.register(confirmParticipants)
app.register(createActivity)
app.register(getActivities)
app.register(createLink)
app.register(getLinks)

app.listen({port:3333}).then(() =>{
    console.log('Server is Running!')
} )