import {FacebookIcon} from 'react-share';
import {FacebookShareButton} from 'react-share';
import {WhatsappIcon}from 'react-share';
import {WhatsappShareButton}from 'react-share';
import {TwitterIcon}from 'react-share';
import {TwitterShareButton}from 'react-share';

import '../css/socials.css';
const Url=window.location.href;
const quote="Join TalkOfTech To Get All Tech Information" ;
function Socials(){
    return <div className="socials">
            <FacebookShareButton url={Url} quote={quote}
                hashtag="#talkoftech">
                <FacebookIcon size={40}logoFillColor="white" round={true}></FacebookIcon>
            </FacebookShareButton>
            <WhatsappShareButton url={Url} quote={quote}>
                <WhatsappIcon size={40}logoFillColor="white" round={true}></WhatsappIcon>
            </WhatsappShareButton>
            <TwitterShareButton url={Url} quote={quote}>
                <TwitterIcon size={40}logoFillColor="white" round={true}></TwitterIcon>
            </TwitterShareButton>
            
        </div>
   
}
export default Socials;