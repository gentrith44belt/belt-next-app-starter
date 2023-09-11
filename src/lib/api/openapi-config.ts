import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "https://api.beltdev.com/admin/v3/api-docs",
  apiFile: "./base-api.ts",
  apiImport: "baseApi",
  outputFile: "./generated/index.ts",
  exportName: "generatedApi",
  hooks: {
    queries: true,
    lazyQueries: true,
    mutations: true,
  },
};

export default config;
