function Icons({name,size,color,hoverclass=""}){
    return <span  style={{fontSize:size,color:color}} className={"material-icons "+hoverclass}>
    {name}
    </span>
}
export default Icons;