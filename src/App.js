import { useState } from 'react';
import Header from './components/Header';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';

const App =() => {
const[showAddContact, setShowAddContact] = useState(false)
const [contacts, setContacts] = useState([
  {
    id: 0,
    name: 'John Doe',
    email: 'johnd@gmail.com',
    phone: '818-717-1616',
    address: '22 N Street Drive',
    city: 'Bella Vista',
    state: 'Arkansas',
    zip: 72715
  }
])

const addContact = (contact) => {
  const id = Math.floor(Math.random() * 1000) + 1;
  const newContact = {id, ...contact}
  setContacts([...contacts, newContact])
}

const deleteContact = (id) => {
  setContacts(contacts.filter((contact) => contact.id !== id));
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddContact(!showAddContact)} showAdd={showAddContact} />
      {showAddContact && <AddContact onAdd={addContact} />}
      {contacts.length > 0 ? 
        <Contacts 
          contacts={contacts} 
          onDelete={deleteContact} /> 
        : 'No Contacts To Show'}
    </div>
  );
}

export default App;
