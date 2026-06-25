import Router from "./router/router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
  <Header />
  <Router />
  <Footer />
</div>
  )
}

export default App;