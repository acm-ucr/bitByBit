import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-code-black pt-16">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
