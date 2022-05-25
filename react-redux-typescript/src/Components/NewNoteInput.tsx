import React, { useState } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");
  const updateNote = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };
  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };
  return (
    <div>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Insert note..."
      />
      <button onClick={onAddNoteClick}>Add note</button>
    </div>
  );
};
