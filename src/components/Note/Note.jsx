import React from "react";
import './Note.css';

const Note = ({id, text, date, handleDeleteNote}) => {
    return(
        <div className="note">
           <span>{text}</span>
           <div className="note-footer">
               <p>{date}</p>
               <i className="fa-solid fa-trash" onClick={() => handleDeleteNote(id)}/>
           </div>
        </div>
    )
}
export default Note;