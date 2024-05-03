import React, { useState } from 'react';

export default function About() {
    const [bgColor, setBgColor] = useState(false);
    const [btnName, setBtnName] = useState(false);
    const [accordionOpen, setAccordionOpen] = useState(true); // State to track accordion open/close

    const handleDarkMode = () => {
        setBgColor(!bgColor);
    };

    const handleBtnToggle = () => {
        setBtnName(!btnName);
    };

    const handleAccordionToggle = () => {
        setAccordionOpen(!accordionOpen); // Toggle accordion open/close state
    };

    return (
        <div className='container' style={{ backgroundColor: bgColor ? "black" : "white", color: bgColor ? "white" : "black", border: bgColor ? "1px solid white" : "none"}}>
            <h1 className='my-3 text-center'>About Our Text Utils</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" 
                                style={{ backgroundColor: bgColor ? "#0003ffb5" : "white", color: bgColor ? "white" : "black", border: bgColor ? "1px solid white" : "none"}} 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#collapseOne" 
                                aria-expanded={accordionOpen ? "true" : "false"} // Set aria-expanded based on accordion state
                                aria-controls="collapseOne"
                                onClick={handleAccordionToggle}> 
                            {accordionOpen ? "Open Accordion" : "Closed Accordion"} {/* Render button text dynamically */}
                        </button>
                    </h2>
                    <div id="collapseOne" className={`accordion-collapse ${accordionOpen ? 'show' : ''}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: bgColor ? "black" : "white", color: bgColor ? "white" : "black", border: bgColor ? "1px solid white" : "none"}}>
                        Our Text Util Word Counter is a versatile tool designed to streamline your text manipulation needs. With features like Convert to Uppercase and Convert to Lowercase, transforming text to your desired case is effortless. Whether you're formatting headings or normalizing input, these functions ensure consistency and clarity.

The Copy All Text feature simplifies sharing and editing by swiftly transferring your entire text content with a single click. No more tedious manual selection – just copy and paste wherever needed.

For a clean slate, the Reset option clears the text area, offering a fresh canvas for your next task. It's perfect for starting anew or tidying up after completing a task.

With the Speak function, our tool goes beyond text display, giving a voice to your words. Whether you prefer auditory learning or need assistance with pronunciation, this feature is invaluable.

Additionally, our Text Util Word Counter offers a customizable interface with Dark Mode support, enhancing readability and reducing eye strain, especially in low-light environments. Toggle between light and dark themes effortlessly to suit your preferences and surroundings.

Whether you're a student, professional, or casual user, our tool caters to your diverse text manipulation needs with efficiency and convenience. Experience the power of seamless text editing and formatting with our feature-rich Text Util Word Counter.
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}
