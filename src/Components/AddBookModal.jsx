import React from "react";
import "./AddBookModal.css";

const AddBookModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault(); // stop page refresh
        onClose(); // close modal on submit
    };

    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <h2>Enter the book information</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Title:
                            <input
                                type='text'
                                name='title'
                                placeholder='Title'
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Author:
                            <input
                                type='text'
                                name='author'
                                placeholder='Author'
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Publisher:
                            <input
                                type='text'
                                name='publisher'
                                placeholder='Publisher'
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Publication Year:
                            <input
                                type='text'
                                name='year'
                                placeholder='Publication Year'
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Language:
                            <input
                                type='text'
                                name='language'
                                placeholder='Language'
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Pages:
                            <input
                                type='text'
                                name='pages'
                                placeholder='Pages'
                            />
                        </label>
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddBookModal;
