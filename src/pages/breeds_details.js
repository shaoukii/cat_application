import { useParams } from 'react-router-dom';
import Data_cat from "../cat_card/cat_data"


const CatDetails=()=> {
    const { id } = useParams();
    const cat = Data_cat.find(cat => cat.id === id);
  
    if (!cat) {
      return <div>Sorry, cat not found!</div>;
    }
  
    return (
      <div>
        <img src={Data_cat.url} alt={Data_cat.breed} />
        <h2>{Data_cat.breed}</h2>
        <p>{Data_cat.description}</p>
      </div>
    );
  }
export default CatDetails