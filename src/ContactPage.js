import React, { useState } from 'react';

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('active');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddContact = () => {
    const newContact = {
      firstName,
      lastName,
      status
    };

    if (editMode) {
      const updatedContacts = [...contacts];
      updatedContacts[editIndex] = newContact;
      setContacts(updatedContacts);
      setEditMode(false);
    } else {
      setContacts([...contacts, newContact]);
    }

    setFirstName('');
    setLastName('');
    setStatus('active');
  };

  const handleEditContact = (index) => {
    const contactToEdit = contacts[index];
    setFirstName(contactToEdit.firstName);
    setLastName(contactToEdit.lastName);
    setStatus(contactToEdit.status);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className='total'>
      <h1>Contact Page</h1>
      <div className='box'>

      <form>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br/>
        <br/>

        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br/>
        <br/>



        <div>
          Status:
          <label>
            <input
              type="radio"
              value="active"
              checked={status === 'active'}
              onChange={() => setStatus('active')}
            />
            Active
          </label>
          <br/>


          <label>
            <input
              type="radio"
              value="inactive"
              className='inactive'
              checked={status === 'inactive'}
              onChange={() => setStatus('inactive')}
            />
            Inactive
          </label>
        </div>

        <button type="button" onClick={handleAddContact}>
          {editMode ? 'Update Contact' : 'Save Contact'}
        </button>
      </form>
      </div>

      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.firstName}<br/>
             {contact.lastName} <br/>
            
            <button className='edit' type="button" onClick={() => handleEditContact(index)}>
              Edit
            </button>
            <br/>
            <button className='delete' type="button" onClick={() => handleDeleteContact(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactPage;
