import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';

class App extends React.Component {

  render() {
    const {notes} = this.props;

    return (
      <div>
        <button className="add-note" onClick={this.addNote}>
          +
        </button>
        <Notes
          notes={notes}
          onNoteClick={this.activateNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
          />
      </div>
    );
  }

  addNote = () => {
    this.props.NoteActions.create({
      id: uuid.v4(),
      task: 'New task'
    });
  }

  deleteNote = (id, e) => {
    e.stopPropagation();
    this.props.NoteActions.delete(id);
  }

  activateNoteEdit = (id) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = true;
        }

        return note;
      })
    });
  }

  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = false;
          note.task = task;
        }
        return note;
      })
    })
  }

}


export default connect(({notes}) => ({
  notes
}), {
  NoteActions
})(App)
