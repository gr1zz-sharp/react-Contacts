import { useState } from 'react';
import Header from './components/Header';
import Contacts from './components/Contacts';

const App =() => {
const [tab, setTab] = useState('view');
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
const [currentContact, setCurrentContact] = useState(null);

const addContact = (contact) => {
  const id = Math.floor(Math.random() * 1000) + 1;
  const newContact = {id, ...contact}
  setContacts([...contacts, newContact])
  setTab('view');
}


const deleteContact = (id) => {
  setContacts(contacts.filter((contact) => contact.id !== id));
}

  return (
    <div className="container">
      <Header title='Contacts' tab={tab} onAddClick={setTab}/>
      <Contacts 
        contacts={contacts}
        setTab={setTab}
        tab={tab}
        currentContact={currentContact}
        setCurrentContact={setCurrentContact}
        onAdd={addContact}
        onDelete={deleteContact}
        />
    </div>
  );
}

export default App;
