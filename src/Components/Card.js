import { Link } from 'react-router-dom';
import '../css/card.css';
function Card({image,Title,Content,id}){
    
    return <div className="card">
        <Link to={`/article/${id}`}><div className="card-image" style={{ backgroundImage: `url(${image})`}}>
            
        </div></Link>
        <div>
             <Link to={`/article/${id}`} target="_blank"><div className="title">{Title}</div></Link>
            <div className="content">{Content}</div>
        </div>
           
        
    </div>
}
export default Card;