"use client";

import { useQuery } from "urql";
import { GetEpisodesDocument } from "~/gql/graphql";

export const FetchClient = () => {
  const [{ data }] = useQuery({ query: GetEpisodesDocument });

  console.log("cacafirst", data);

  return <div>FetchClient</div>;
};
