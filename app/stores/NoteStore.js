import uuid from 'uuid';
import NoteActions from '../actions/NoteActions';

export default class NoteStore {
  constructor() {

    this.bindActions(NoteActions);

    this.notes = [
      {
        id: uuid.v4(),
        task: 'Learn React'
      },
      {
        id: uuid.v4(),
        task: 'Do laundry'
      }
    ];
  }

  create(note) {
    this.setState({
      notes: this.notes.concat(note)
    });
  }
  update(updateNote) {
    console.log('update note', updateNote);
  }
  delete(id){
    this.setState({
      notes: this.notes.filter(note => note.id !== id)
    });
  }

}
