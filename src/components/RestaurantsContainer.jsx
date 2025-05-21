import Restaurant from "./Restaurant";
import 
//Containers are for behind the scenes logic  
function RestaurantsContainer(props) {
  console.log(props)
  return (
    <div className="restaurantContainer">
      {props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} />)}
    </div>
  );
}

export default RestaurantsContainer;
