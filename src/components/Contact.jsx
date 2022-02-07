import {FaTimes} from 'react-icons/fa'

const Contact = ({contact, onDelete}) => {
    return(
        <div className='Contact'>
            <h3>
                {contact.name}
                <FaTimes style={{color: 'red', cursor: 'pointer'}}
                onClick={() => onDelete(contact.id)} />
            </h3>
            <p>{contact.phone}</p>
        </div>
    );
}

export default Contact;