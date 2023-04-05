import React, { useState, useEffect } from 'react';
import './hero.css';

function Hero() {
    const [index, setIndex] = useState(0);
    const texts = ['Developer', 'Artist', 'Innovator','Hiker', 'Freelancer', 'Adventurer', 'Backpacker'];
    const [text, setText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentWord = texts[index];

        const interval = setInterval(() => {
            if (charIndex === currentWord.length) {
                clearInterval(interval);
                setTimeout(() => {
                    let i = currentWord.length;
                    const backspaceInterval = setInterval(() => {
                        setText(currentWord.slice(0, i));
                        i--;
                        if (i < 0) {
                            clearInterval(backspaceInterval);
                            setTimeout(() => {
                                const nextIndex = index === texts.length - 1 ? 0 : index + 1;
                                setIndex(nextIndex);
                                setCharIndex(0);
                            }, 1000);
                        }
                    }, 100);
                }, 1000);
            } else {
                setText(currentWord.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }
        }, 200);

        return () => clearInterval(interval);
    }, [charIndex, index]);

    const underlineStyle = {
        borderBottom: `4px solid #1f5297`,
        display: 'inline-block',
        paddingBottom: '0px',
    };

    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container text-center mx-auto">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-12 col-sm-6 col-xs-6">
                        <div className="d-flex justify-content-center">
                            <h3 className="p-5 m-5">Paul Swann</h3>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-xs-12">
                        <div className="text-wrapper">
                            <h1 className="typewriter">
                                {' '}
                                {text !== '' && (
                                    <span className="p-0 mt-0" style={underlineStyle}>
              {text.trim()}
            </span>
                                )}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Hero;