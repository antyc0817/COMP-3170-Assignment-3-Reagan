import React, { useState } from "react";

function Book({ image, title, price, link, onRemove }) {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
    };

    return (
        <div
            className={`book${selected ? " selected" : ""}`}
            onClick={handleClick}>
            <img
                className='book__img'
                src={image}
                alt={title}
            />
            <h3 className='book__title'>{title}</h3>
            <p className='book__price'>{price}</p>
            <a
                className='book__link'
                href={link}
                target='_blank'
                rel='noopener noreferrer'>
                Additional Information
            </a>
            <button
                className='book__remove'
                onClick={(e) => {
                    e.stopPropagation();
                    onRemove(title);
                }}>
                Remove
            </button>
        </div>
    );
}

export default Book;
