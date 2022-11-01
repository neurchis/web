import { use } from "react";

type RootObject = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchSomePosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: RootObject[] = await response.json();
  return data;
};

const Head = () => {
  const [firstPost] = use(fetchSomePosts());
  return (
    <>
      <title>{"zqd" + firstPost.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta name="description" content={firstPost.body} />
    </>
  );
};

export default Head;
