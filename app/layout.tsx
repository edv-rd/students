import Nav from "@components/Nav";
import "@styles/globals.css";

export declare interface AppProps {
  children?: React.ReactNode;
}

export const metadata = {
  title: "Students",
  description: "Student management",
};

const RootLayout = ({ children }: AppProps) => {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
