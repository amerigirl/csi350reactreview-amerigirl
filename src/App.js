import "./App.css";
import Restaurant from "./components/Restaurant";
import RestaurantsContainer from "./components/RestaurantsContainer";
//App is the root of our application and where we load in our components.
function App() {
  return (
    <div className="App">
      <Restaurant />
    </div>
  );
}

export default App;
