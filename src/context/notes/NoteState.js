import Notecontext from "./Notecontext";
import { useState } from "react";

const NoteState = (props)=>{
    const [state, setstate] = useState({
        "Name":"Udbv",
        "Age":20,
    })
    const Update = ()=>{
        setTimeout(() => {
            setstate({
                "Name":"Rohit",
                "Age":20,
            })
        }, 6000);
    }
    return(
        <Notecontext.Provider value={{state, Update}}>
        {props.children}
        </Notecontext.Provider>
    )
}

export default NoteState;