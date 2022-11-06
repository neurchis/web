import { devtoolsExchange } from "@urql/devtools";
import { PropsWithChildren } from "react";
import {
  Client,
  ClientOptions,
  createClient,
  defaultExchanges,
  Provider,
} from "urql";

export const urqlConfig: ClientOptions = {
  url: "https://rickandmortyapi.com/graphql",
  exchanges: [devtoolsExchange, ...defaultExchanges],
};

declare global {
  // eslint-disable-next-line no-var
  var cachedUrql: Client;
}

let urql: Client;

if (process.env.NODE_ENV === "production") {
  urql = createClient(urqlConfig);
} else {
  if (!global.cachedUrql) {
    global.cachedUrql = createClient(urqlConfig);
  }
  urql = global.cachedUrql;
}

export const GraphqlProvider = ({ children }: PropsWithChildren) => (
  <Provider value={urql}>{children}</Provider>
);
