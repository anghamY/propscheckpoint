
import React from "react";
import Profil from "./profil/Profil";
function App() {
   let name='angham'
   function handleName(){
      alert(`The profile of : ${name}`);
    }
   return(
     <div>
        <Profil FullName={name} Bio="23" Profission="digital communicator" handleName=""/>   <Profil/>
     </div>
    )
   }
export default App;
