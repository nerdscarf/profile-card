import React, { useState } from 'react'

export default function Tagline() {

    const [tag, setTag] = useState("My name is Tiph.");

    return (
        <div>
            {tag}<br/>
            <button onClick={() => setTag("My name is Tiph.")}>Name</button>
            <button onClick={() => setTag("I'm a Frontend Developer.")}>Skills</button>
        </div>
    )
}
