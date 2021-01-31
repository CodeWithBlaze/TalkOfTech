import Heading from '../Components/Heading';
import Socials from '../Components/Socials';
import {useState} from 'react';
import '../css/header.css';
function Header({search_box}){
    const [Text,setText]=useState("");
    function changeText(text){
        setText(text);
        
    }
    return<> <div className="header">
        <Socials link={[{social:"fa fa-twitter fa-2x",link:"https://twitter.com/SagnikS62177985?s=09"},
        {social:"fa fa-envelope fa-2x",link:"mailto:sagniksaha20013@gmail.com"},
        {social:"fa fa-facebook-square fa-2x",link:"https://www.facebook.com/profile.php?id=100020149653509"},
        {social:"fa fa-user-secret fa-2x",link:""}
    ]}/>
        <Heading />
        
            <div className="search-box-container">
        <input className="search-box" 
        type="text" 
        id="fname" 
        name="fname" 
        placeholder="search anything"
        value={Text}
        onChange={text=>changeText(text.target.value)}
        />
        	
    </div>
         {/* <Icons name="menu" size={30} color="black" hoverclass="menu-hover"/>    */}

        
        
    </div>
   
    </>
}
export default Header;