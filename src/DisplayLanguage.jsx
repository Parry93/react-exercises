import React from "react" 
import  { LanguageContext } from "./LanguageContext"

const strings = {
    en :{
        HELLO: "Hello "
    },
    it :{
        HELLO: "Ciao"
    }
}
class DisplayLanguage extends React.Component{
    render(){
        return <div>
            <LanguageContext.Consumer>
            {language =>{
                return (
                    <h1>{strings[language].HELLO}</h1>
                )
            }}
            </LanguageContext.Consumer>
        </div>
    }
    
}


export default DisplayLanguage