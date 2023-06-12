import { Component } from 'react';
import { nanoid } from 'nanoid';

import AddContactForm from 'components/AddContactForm/AddContactForm';

// import SearchFilter from 'components/SearchFIlter/SearchFIlter';
import List from 'components/List/List';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  // showList = () => {
  //   this.setState({ isListShown: true });
  // };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(element => element.id !== id),
    }));
  };

  addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  // openForm = () => {
  //   this.setState({ isFormShown: true });
  // };

  // closeForm = () => {
  //   this.setState({ isFormShown: false });
  // };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <>
        <AddContactForm addContact={this.addContact} />

        {/* <SearchFilter /> */}
        <List data={contacts} deleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;
