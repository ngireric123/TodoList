import React from 'react'

const Footer = ({ length }) => {
    return (
        <footer>
            <p>{length} List {length === 1 || length === 0 ? "item" : "items"}</p>
        </footer>
    )
}

Footer.defaultProps = {
    length: 0
}
export default Footer
