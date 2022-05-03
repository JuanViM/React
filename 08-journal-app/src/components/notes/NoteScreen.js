import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>

            <NotesAppBar />
            <div className='notes__content'>
                <input 
                type="text"
                placeholder='pon algun titulo'
                className='notes__title-input'
                autoComplete='off'
                />

                <textarea
                placeholder='que paso hoy?'
                className='notes__textarea'
                ></textarea>

                <div className='notes__image'>

                    <img 
                    src='https://www.google.com/maps/about/images/treks/reef6-carousel.jpg'
                    alt='corales'
                    ></img>
                </div>

            </div>
        </div>
    )
}
