import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';

import ContactForm from 'components/ContactForm/ContactForm';
import SearchFilter from 'components/SearchFIlter/SearchFIlter';
import ContactList from 'components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };

    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      Report.info('SORRY', `${newContact.name} is already in contacts.`, 'Ok');
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  changedFilter = evt => {
    this.setState({ filter: evt.target.value.trim() });
  };

  searchContact = () => {
    const { contacts, filter } = this.state;

    const searchedContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return searchedContacts;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(element => element.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <SearchFilter search={this.changedFilter} />
        <ContactList
          data={this.searchContact()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;

// Report.init({
//   backgroundColor: 'rgba(79, 46, 232, 0.8)',
//   titleFontSize: '24px',
//   messageFontSize: '18px',
//   info: {
//     svgColor: '#fff',
//     titleColor: '#fff',
//     messageColor: '#fff',
//     buttonBackground: '#2f0fbc',
//     buttonColor: '#fff',
//     backOverlayColor: 'rgba(79, 46, 232, 0.2)',
//   },
// });
