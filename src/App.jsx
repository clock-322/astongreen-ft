import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Application from './Application'

const App = () => {
    const [sizes, setSizes] = useState({ x: document.body.clientWidth, y: window.innerHeight });
    useEffect(() => {
        const handleResize = () => {
            setSizes({ x: document.body.clientWidth, y: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    return (
        <>
            <div className="sizes">
                {sizes.x} x {sizes.y}
            </div>
            <Toaster />
            <Application />
        </>
    )
}

export default App