import "@styles/globals.css";

export const metadata = {
  title: "Students",
  description: "Student management",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
