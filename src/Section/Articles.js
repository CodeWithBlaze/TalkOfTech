import Header from './Header';
import '../css/article.css';
import '../css/element.css';
import '../Database/FireBaseData';
import {getads} from '../Data-dev/ArticleData';
import {getArticleFromDatabase}from '../Database/FireBaseData';
import { useEffect, useState } from 'react';
let data="";
let adslists=getads();
function Article(props){
    const[count,setCount]=useState("");
    useEffect(()=>{
        async function datafromfirebase(){
            data= await getArticleFromDatabase(props.match.params.id);
            setCount(data[0].data().content)
            
        }
        datafromfirebase()
        
    },[props.match.params.id]);
    
    
    return <div>
        <div className="article-container">
             <div className="article-box" dangerouslySetInnerHTML={{__html:count}}>
               
            </div>
            <div></div>
            <div className="ads-sense">
                {adslists.map(ad=><div key={ad.id} className="ad-image"><a href={ad.url}><img src={ad.image} alt=""/></a></div>)}

            </div>
            
            
        </div>
       
    </div>
}
export default Article;