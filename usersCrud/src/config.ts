import * as dotenv from "dotenv";
import * as env from "env-var";

// Load environment variables from the .env file
dotenv.config();

const config = {
  env: env.get("NODE_ENV").required().asString(),
  service: {
    port: env.get("USERS_CRUD_PORT").required().asInt(),
    jwt_secret: {
      secret: env.get("JWT_SECRET").required().asString(),
      exp: env.get("JWT_EXP").asInt(),
    },
  },
  mongo: {
    uri: env.get("USERS_MONGO_URI").required().asString(),
    usersCollectionName: env.get("USERS_COLLECTION_NAME").required().asString(),
  },
};

export default config;
