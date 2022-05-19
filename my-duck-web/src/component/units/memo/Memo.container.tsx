import styled from "@emotion/styled";
import { useReducer, useState } from "react";
import {v4 as uuid} from 'uuid';

const NoteForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;

  textarea {
    border: 1px solid red;
    min-width: 100%;
    max-width: 100%;
    height: 100px;
    padding: 10px;
    outline: none;
  }

  button {
    width: 100%;
    background-color: #fff27f;
    padding: 10px;
    border: 0;
    outline: none;
    &:hover {
      background-color: tomato;
      color: white;
    }
  }
`

const Note = styled.div`
  position: absolute;
  cursor: pointer;
  background-color: #f9e82f;
  width: 200px;
  top: 100px;
  left: 300px;
  height: 200px;
  padding: 20px;
 

  .text{
    height: 100%;
    width: 100%;
    white-space: pre-wrap;
    overflow-y: scroll;
  }
`

const initialNotesState = {
  lastNoteCreated: null,
  totalNotes: 0,
  notes: []
}

const noteReducer = (prevState, action) => {
  switch(action.type) {
    case 'ADD_NOTE': {
      const newState = {
        lastNoteCreated: new Date().toTimeString().slice(0, 8),
        totalNotes: prevState.notes.length + 1,
        notes: [...prevState.notes, action.payload]
      }

      console.log('After ADD_NOTE:', newState)
      return newState
    }
  }
}

export default function MemoContainer ( ) {
  const [noteInput, setNoteInput] = useState("")
  const [noteState, dispatch] = useReducer(noteReducer, initialNotesState) 

  const dropNote = (event) => {
    event.target.style.left = `${event.pageX - 50}px`
    event.target.style.top = `${event.pageY - 50}px`
  }

  const dragOver = (event) => {
    event.stopPropagation()
    event.preventDefault()
  }

  const addNote = (event) => {
    event.preventDefault()

    if (!noteInput) {
      return
    }

    const newNote = {
      id: uuid(),
      text: noteInput,
      rotate: Math.floor(Math.random() * 20 )
    }

    dispatch({ type: 'ADD_NOTE', payload: newNote })
  }

  return (
    <div onDragOver={dragOver}>
      <h1>시도중</h1>
      <NoteForm>
      <form onSubmit={addNote}>
        <textarea value={noteInput} placeholder="hhhh" onChange={event => setNoteInput(event.target.value)}></textarea>
        <button>add</button>
      </form>
      </NoteForm>
      {noteState
        .notes
        .map((note) => (

          <Note key={uuid()} style={{ transform: `rotate(${note.rotate}deg)`}} 
          draggable="true"
          onDragEnd={dropNote}
          >
            <pre className="text">{note.text}</pre>
          </Note>
        ))
      }
    </div>
  )
}