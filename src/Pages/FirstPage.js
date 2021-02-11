import "../css/FirstPage.css";
import logo from "../images/Ellipse 2.svg";
import MainImage from '../images/Group 19.svg';
import MainImageGirl from '../images/girl.webp';
import Card from '../Components/Card';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { useState, useEffect } from 'react';
import { getDataFromDatabase, getDataSearched } from '../Database/FireBaseData';
import Loading from '../Components/Loading';
import Searchbar from '../Components/Searchbar';
import { Link } from "react-router-dom";


let save_articles = [];
let last_article = null;
function FirstPage() {
  const [currentArticle, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");


  function HandleInput(text) {
    if (text === null || text === '')
      setArticle(save_articles);
    setInput(text);
    console.log(text);

  }
  async function Search() {
    save_articles = currentArticle;
    const val = await getDataSearched(input);
    setArticle(val);

  }
  async function data() {

    let articles = "";
    let article_array = [];

    articles = await getDataFromDatabase(last_article);
    articles.forEach(data => {
      article_array.push({
        id: data.id,
        content: data.data()
      })
    });
    setArticle(article_array);
    setLoading(false);
    last_article = articles[articles.length - 1];
  }
  useBottomScrollListener(() => {
    if (currentArticle.length < 3)
      return;
    async function getMoreData() {
      await data();
    }
    getMoreData();
  })
  useEffect(() => {

    async function getData() {
      await data()

    }
    getData()
  }, []);
  function getStatus() {
    if (loading)
      return <Loading />
    else
      return <div className="card-class">{currentArticle.map(article =>

        <Card key={article.id}
          image={article.content.image}
          Title={article.content.title}
          Content={article.content.summary}
          id={article.id}
        />)}</div>
  }
  return <>
    <div className="logo-text">
      <img src={logo} className="logo-background" alt="" />
      <div className="logo-text-container">
        <div className="logo-text">TalkOfTech</div>
        <div className="logo-sub">Learn Short and Simple</div>
      </div>

    </div>
    <div className="navigation">
      <Link to="/Collaborate"><h4 className="naviagation-list">Collaborate</h4></Link>
      <Link><h4 className="naviagation-list">About</h4></Link>
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
      Learn Tech in an easy way with our articles.
      Read Learn and Join to share your knowledge
      with world.Collaborate with us and start writing
      articles with our automated blog maker no coding experience required
    </div>
    <a href="#articles" ><button className="btn">Get Started</button></a>
    <div className="main-image">
      <img src={MainImage} className="main-image-img" alt="" />
      <img src={MainImageGirl} className="main-image-girl" alt="" />
    </div>
    <div className="search-panel-container">
      <Searchbar onchange={HandleInput} onSearch={Search} />

    </div>
    <div className="Articles-rendering" id="articles">
      {
        getStatus()
      }
    </div>


  </>
}
export default FirstPage;