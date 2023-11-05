"use client"

import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>you clicked on the button {count} times</p>
            <button onClick={() => setCount(count+1)}>Click me</button>
        </div>
    )
}