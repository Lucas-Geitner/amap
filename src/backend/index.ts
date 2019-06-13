import faunadb, { query as q } from 'faunadb'
import { ApolloServer, gql } from 'apollo-server'

if (!process.env.FAUNADB && typeof (process.env.FAUNADB) !== "string") {
  process.env.FAUNADB = "fnADQuu40YACB1zSTNpapw2QFPQYYqbeU6PF9MSi"
  // throw new Error("issue with env variable of FaunaDB")
}

const client = new faunadb.Client({ secret: process.env.FAUNADB })

const {
  Paginate, Match, Map, Ref, Get, Index, Delete, Class, Create, Update, Lambda, Var, IsEmpty
} = q

const typeDefs = gql`
  type Log {
    id: String
    title: String
    rating: Int
  }

  type Query {
    logs: [Log!]!
    log(id: String): Log
  }
  type Mutation {
    editLog(id: String!, title: String!): Log!
    deleteLog(id: String!): Log!
    addLog(title: String!, rating: Int!): Log!
  }
`


const resolvers = {
  Query: {
    log: async (_: any, { id }: any, __: any, { cacheControl }: any) => {
      cacheControl.setCacheHint({ maxAge: 60 });
      const { data, ref } = await client.query(Get(Ref(Class('Logs'), id)))

      return ({ ...data, id: ref.id })
    },

    // https://github.com/apollographql/apollo-server/tree/master/packages/apollo-cache-control
    logs: async (_: any, ___: any, __: any, { cacheControl }: any) => {
      cacheControl.setCacheHint({ maxAge: 60 });
      return([{id: "hey"}])
      const find = Map(
        Paginate(
          Match(Index('all_logs')),
          { size: 1000 }
        ),
        Lambda('X', Get(Var('X')))
      )

      const { data } = await client.query(find)
      return data.map((d: any) => ({ ...d.data, id: d.ref.id }))
    }
  },
  Mutation: {
    addLog: async (_: any, { title, rating }: any) => {
      const log = Create(Class('Logs'), { data: { title, rating } })
      const { data, ref } = await client.query(log)

      return ({ ...data, id: ref.id })
    },

    editLog: async (_: any, { id, title }: any) => {
      const updateQuery = Update(
        Ref(Class('Logs'), id),
        { data: { title } }
      )

      const { data, ref } = await client.query(updateQuery)

      return ({ ...data, id: ref.id })
    },
    deleteLog: async (_: any, { id }: any) => {
      const deleteQuery = Delete(Ref(Class('Logs'), id))
      const { data, ref } = await client.query(deleteQuery)

      return ({ ...data, id: ref.id })
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  tracing: true,
  cacheControl: true
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
