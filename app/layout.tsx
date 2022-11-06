"use client";

import "~/app/styles/globals.css";
import { GraphqlProvider } from "~/lib/urql";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body>
        <GraphqlProvider>{children}</GraphqlProvider>
      </body>
    </html>
  );
};

export default RootLayout;
