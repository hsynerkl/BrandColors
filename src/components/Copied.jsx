import React from 'react'

const Copied = ({ color }) => {
    return (
        <div className="copied" style={{ '--copiedColor': `#${color}` }}>Copied {color} to Clipboard</div>
    )
}

export default Copied