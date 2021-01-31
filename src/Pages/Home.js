import Header from '../Section/Header';
import Card from '../Components/Card';
import {useBottomScrollListener} from 'react-bottom-scroll-listener';
import {useState,useEffect} from 'react';
import {getDataFromDatabase} from '../Database/FireBaseData';
import Loading from '../Components/Loading';

let last_article=null;

function Home(){
  
  const[currentArticle,setArticle]=useState([]);
  const[loading,setLoading]=useState(true);

  async function data(){

    let articles="";
    let article_array=[];

    articles= await getDataFromDatabase(last_article);
     articles.forEach(data => {
        article_array.push({
            id:data.id,
            content:data.data()
          })
        });
        setArticle(article_array);
        setLoading(false);
        last_article=articles[articles.length-1];
  }
  useBottomScrollListener(()=>{
    if(currentArticle.length<3)
        return;
   async function getMoreData(){
     await data();
    }
    getMoreData();
  }) 
  useEffect(()=>{
    
    async function getData(){
      await data()
      
    }
   getData()
  },[]);
  function getStatus(){
    if(loading)
      return <Loading/>
    else
      return <div className="card-class">{currentArticle.map(article=>
         
      <Card key={article.id}
      image={article.content.image} 
      Title={article.content.title} 
      Content={article.content.summary}
      id={article.id}
      />)}</div>
  }
  return <>
        <Header  />
       
        <div className="article-area">
        
        {
          getStatus()
        }

        </div>
      
        
    </>
}
export default Home;