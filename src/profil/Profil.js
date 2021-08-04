function Profil ({FullName,Bio,Profission,children,handleName}) {
    return(
        <di>
            {children}
        <h1>{FullName}</h1>
        <h2>{Bio}</h2>
        <h3>{Profission}</h3>
    
        <button onClick={handleName} style={{backgroundColor:"green",color:"darkgrey",fontSize:"large",fontWeight:"bold"}}>Send</button>
        </di>
    )
}
export default Profil
Profile.defaultProps = {
    fullName : "yes",
    bio : "yes",
    profession : "yes",
    handleName : function handleName(){alert("no")}
};

Profile.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string,
    handleName : PropTypes.func
};
