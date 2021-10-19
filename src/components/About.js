import React, { useContext, useEffect } from 'react';
import Notecontext from '../context/notes/Notecontext';

export default function About() {
    const whatever = useContext(Notecontext);  //Whatever holds -> state and update
    useEffect(() => {
        whatever.Update()
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            This is about {whatever.state.Name}
        </div>
    )
}
