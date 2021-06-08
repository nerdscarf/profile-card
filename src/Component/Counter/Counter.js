import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>
           {count} <i class="far fa-heart" onClick={() => setCount(count + 1)}></i>
        </div>
    )
}
