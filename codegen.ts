import type { CodegenConfig } from "@graphql-codegen/cli";

// const config: CodegenConfig = {
//   schema: "graphql.schema.json",
//   documents: ["app/**/*.graphql"],
//   generates: {
//     "src/types.ts": { plugins: ["typescript"] },

//     "app/": {
//       preset: "near-operation-file",
//       plugins: ["typescript-operations"],
//       presetConfig: {
//         extension: ".generated.tsx",
//         baseTypesPath: "types.ts",
//       },
//     },
//   },
// };

const config: CodegenConfig = {
  schema: "graphql.schema.json",
  documents: ["app/**/*.graphql"],
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
