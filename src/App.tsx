import { Layout, Home } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <Home />
      </Layout>
    </>
  );
};

export default App;
