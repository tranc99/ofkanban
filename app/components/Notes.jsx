import React from 'react';
import uuid from 'uuid';

const notes = [
  {
    id: uuid.v4(),
    task: "Learn React"
  },
  {
    id: "11bbffc8-5891-4b45-b9ea-5c99aadf870f",
    task: "Do laundry"
  },
  {
    id: "11bbffc8-5891-4b45-b9ea-5c99aadf870e",
    task: "Rock n roll"
  }
];

export default () => (
  <ul>{notes.map(note =>
      <li key={note.id}>{note.task}</li>
      )}</ul>
)
