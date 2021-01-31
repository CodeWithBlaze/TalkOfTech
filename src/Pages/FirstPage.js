import "../css/FirstPage.css";
import logo from "../images/Ellipse 2.svg";
import MainImage from '../images/Group 19.svg';
import MainImageGirl from '../images/girl.webp';
import Card from '../Components/Card';
import {useBottomScrollListener} from 'react-bottom-scroll-listener';
import {useState,useEffect} from 'react';
import {getDataFromDatabase} from '../Database/FireBaseData';
import Loading from '../Components/Loading';

let last_article=null;
function FirstPage(){
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
    <div className="logo-text">
        <img src={logo} className="logo-background" alt=""/>
        <div className="logo-text">TalkOfTech</div>
    </div>
    <div className="navigation">
        <h4 className="naviagation-list">Collaborate</h4>
        <h4 className="naviagation-list">Socials</h4>
    </div>
    <div className="main-text">
         <div className="main-text-text1">
            Get Tech
        </div>
        <div className="main-text-text2">
            Knowledge
        </div>
        <div className="main-text-text1">
            For Free
        </div>
       
    </div>
    <div className="description">
        Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua.
    </div>
    <a href="#articles"><button className="btn">Get Started</button></a>
    <div className="main-image">
        <img src={MainImage} className="main-image-img" alt=""/>
        <img src={MainImageGirl} className="main-image-girl" alt=""/>
    </div>
    <div className="Articles-rendering" id="articles">
      {
          getStatus()
      }
    </div>
   </>
}
export default FirstPage;