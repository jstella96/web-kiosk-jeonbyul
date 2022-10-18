import { ApolloServer, gql } from "apollo-server";
import fetch from "node-fetch";
import { readFileSync } from "fs";

const options = JSON.parse(readFileSync("./data/options.json", "utf-8"));
const categories = JSON.parse(readFileSync("./data/categories.json", "utf-8"));
const orders = [];

const typeDefs = gql`
  type Food {
    id: ID
    name: String
    imgUrl: String
    categoryId: Int
    basePrice: String
  }
  type Category {
    id: ID
    name: String
    foods: [Food]
  }
  type Temperature {
    c: String
    h: String
  }
  type Size {
    s: String
    m: String
    l: String
  }
  type OrderResult {
    orderNumber: Int
  }
  type Option {
    id: ID
    temperature: Temperature
    size: Size
  }
  type Query {
    allCategories: [Category]
    option(id: ID!): Option
  }
  type Mutation {
    postOrder(id: ID): OrderResult
  }
`;

const resolvers = {
  Query: {
    allCategories() {
      return categories;
    },
    option(_, { id }) {
      const temperature = options.temperature[id] || { c: null, h: null };
      const size = options.size[id] || { s: null, m: null, l: null };
      return { id, temperature, size };
    },
  },
  Mutation: {
    postOrder(_, { id }) {
      const newOrder = { id };
      orders.push(newOrder);
      return { orderNumber: orders.length };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
