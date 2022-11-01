import "~/app/styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
