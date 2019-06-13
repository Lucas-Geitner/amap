const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({
    serviceList: [
        { name: "accounts", url: "https://pw678w138q.sse.codesandbox.io/graphql" },
        { name: "reviews", url: "https://0yo165yq9v.sse.codesandbox.io/graphql" },
        { name: "products", url: "https://x7jn4y20pp.sse.codesandbox.io/graphql" },
        { name: "inventory", url: "https://o5oxqmn7j9.sse.codesandbox.io/graphql" }
    ]
});

(async () => {
    const { schema, executor } = await gateway.load();

    const server = new ApolloServer({ schema, executor });
    // https://github.com/rajeshdavidbabu/federation-demo-local-services/blob/master/lerna.json
    server.listen().then(({ url }: any) => {
        console.log(`🚀 Server ready at ${url}`);
    });
})();
