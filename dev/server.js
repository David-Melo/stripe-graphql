const { Context, createStripeGraphQLServer } = require('../dist/index')

const isAllowed = (stripeCustomerId, context) => {
  const { isAdmin } = context

  if (isAdmin) {
    return true
  }

  return false
}

const server = createStripeGraphQLServer({
  graphiql: false
})

server.listen(4000, () => {
  console.info('Stripe GraphQL API server is running on http://localhost:4000')
})
