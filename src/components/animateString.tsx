import React from 'react';


interface props {
    text: string,
    className?: string,
}

const AnimateString = ({text, className}: props) => {
    const Chars = Array.from(text)
    return Chars.map((char, Index) => {
        return <div key={Index} className={className}>
            {char}
        </div>
    })
};

export default AnimateString;