import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-code-darkerpurple">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
