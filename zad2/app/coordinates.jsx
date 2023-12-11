import { useState, useEffect } from "react"

function Coordinates() {
    const [ pos, setPos ] = useState({x: 0, y: 0})

    useEffect(() => {
        const mouseMovement = (event) => {
            setPos({ x: event.clientX, y: event.clientY })
        }

        window.addEventListener("mousemove", mouseMovement)

        return () => {
            window.removeEventListener("mousemove", mouseMovement)
        }
    }, []);

    return (
       <p>Mouse position ({pos.x}, {pos.y})</p>
    )
}

export default Coordinates