import '../css/Socials.css';
function Socials({link}){
    return <div>
      {link.map(l=><a key={l.social} href={l.link}><i style={{margin:8}} className={l.social} /></a>)}
    </div>
}
export default Socials;