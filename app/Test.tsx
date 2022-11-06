"use client";

import { useQuery } from "urql";
import { GetCharactersDocument } from "~/gql/graphql";

export const Test = () => {
  const [{ data }] = useQuery({ query: GetCharactersDocument });

  console.log("data", data);

  return (
    <button
      className="bg-red-600 text-yellow-400 font-bold text-4xl"
      onClick={() => console.log("window", typeof window)}
    >
      Test
    </button>
  );
};
