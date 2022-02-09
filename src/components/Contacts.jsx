import Contact from "./Contact";
import AddContact from "./AddContact";
import Row from 'react-bootstrap/Row'
import { Accordion } from "react-bootstrap/";


const Contacts = ({contacts, onDelete, text, tab, setTab, onAdd, currentContact, setCurrentContact}) => {
    switch (tab) {
        case 'add':
            return(
                <AddContact
                    onAdd={onAdd}
                    onDelete={onDelete}
                    tab={tab}
                    setTab={setTab}
                    currentContact={currentContact}
                    text="Add Contact"
                />
            );
        case 'update':
            return(
                <AddContact
                    onAdd={onAdd}
                    onDelete={onDelete}
                    tab={tab}
                    setTab={setTab}
                    currentContact={currentContact}
                    text="Update Contact"
                />
            );
        case 'view':
            return(
                <Row>
                    <Accordion>
                        {contacts
                            .sort((a,b) => a.name.localeCompare(b.name))
                            .map((contact) => (
                                <Contact 
                                    key={contact.id} 
                                    contact={contact} 
                                    onDelete={onDelete} 
                                    setTab={setTab} 
                                    setCurrentContact={setCurrentContact} 
                                />
                        ))}
                    </Accordion>
                </Row>
            )
        default: break;
    }
}

export default Contacts;