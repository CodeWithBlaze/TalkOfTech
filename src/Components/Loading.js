import Logo from '../images/loading.gif';
function Loading(){
    return <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
            <img src={Logo} style={{width:400,height:400}} alt=""/>    
    </div>
}
export default Loading;