import {FaPen, FaTimes} from 'react-icons/fa'
import Accordion from 'react-bootstrap/Accordion'

const Contact = ({contact, onDelete, setTab, setCurrentContact}) => {

    return(
        <Accordion.Item eventKey={contact.id}>
            <Accordion.Header>
                {contact.name}: {contact.phone}
            </Accordion.Header>
            <Accordion.Body>
                <FaTimes 
                    style={{ color: 'red', cursor: 'pointer', float: 'right', margin: '1em'}}
                    onClick={() => onDelete(contact.id)} />
                <FaPen
                    style={{ color: 'blue', cursor: 'pointer', float: 'right', margin: '1em'}}
                    onClick={() => {
                        setCurrentContact(contact); 
                        setTab('update');
                    }}/>
                <ul>
                    <li>
                        {contact.address}
                    </li>
                    <li>
                        {contact.city}
                    </li>
                    <li>
                        {contact.state}
                    </li>
                    <li>
                        {contact.zip}
                    </li>
                </ul>
            </Accordion.Body>
        </Accordion.Item>
            // {/* <h3>
            //     {contact.name}
            //     <FaTimes style={{color: 'red', cursor: 'pointer'}}
            //     onClick={() => onDelete(contact.id)} />
            // </h3>
            // <p>{contact.phone}</p> */}
    );
}

export default Contact;