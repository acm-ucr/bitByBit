import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-code-black pt-16">
      <div className="flex justify-center absolute top-0 w-full">
        <Navigation />
      </div>
      {children}
    </div>
  );
};

export default Layout;
