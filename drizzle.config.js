import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://socialyne%20D_owner:ZKVawAl2hi8J@ep-yellow-cherry-a5ipy181.us-east-2.aws.neon.tech/socialyne%20D?sslmode=require",
    connectionString:
      "postgresql://socialyne%20D_owner:ZKVawAl2hi8J@ep-yellow-cherry-a5ipy181.us-east-2.aws.neon.tech/socialyne%20D?sslmode=require",
  },
});
