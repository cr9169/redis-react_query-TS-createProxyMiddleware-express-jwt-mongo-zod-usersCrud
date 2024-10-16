import * as dotenv from "dotenv";
import * as env from "env-var";

// Load environment variables from the .env file
dotenv.config();

const config = {
  env: env.get("NODE_ENV").required().asString(),
  service: {
    port: env.get("COMPOSITOR_PORT").required().asInt(),
    jwt_secret: {
      secret: env.get("JWT_SECRET").required().asString(),
      exp: env.get("JWT_EXP").required().asInt(),
    },
  },
  usersService: {
    serviceName: env.get("ROOMS_SERVICE_NAME").asString(),
    connectionString: env.get("USERS_SERVICE_CONNECTION_STRING").asString(),
  },
  groupsService: {
    serviceName: env.get("GROUPS_SERVICE_NAME").asString(),
    connectionString: env.get("GROUPS_SERVICE_CONNECTION_STRING").asString(),
  },
};

export default config;
