import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from "miragejs";
import faker from "faker";

interface User {
  name: string;
  email: string;
  created_at: string;
}

function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      user: Model,
    },
    factories: {
      user: Factory.extend({
        name() {
          return `${faker.name.firstName()} ${faker.name.lastName()}`;
        },
        email(...opts) {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(30);
        },
      }),
    },
    seeds(server) {
      server.createList("user", 100);
    },
    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const allUsers = schema.all("user");

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(allUsers.slice(pageStart, pageEnd));
        const total = allUsers.length;

        return new Response(
          200,
          {
            "x-total-count": String(total),
          },
          users
        );
      });
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}

export { makeServer };
