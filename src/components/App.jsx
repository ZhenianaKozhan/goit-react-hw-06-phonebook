// import { useLocalStorage } from 'hooks/useLocalStorage';
// import { useMemo } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export default function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useLocalStorage('filter', '');
  const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  // const visibleContacts = useMemo(
  //   () =>
  //     contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     ),
  //   [contacts, filter]
  // );

  const creatContact = (value, { resetForm }) => {
    const existingContact = contacts.some(
      contact => contact.name === value.name
    );
    if (existingContact) {
      alert(`${value.name} is already in contacts`);
    } else {
      dispatch(addContact(value));
      // toast.success('Add contact');
    }

    resetForm();
  };

  // const handleChangeFilter = e => setFilter(e.target.value);

  // const onDeleteContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={creatContact} />

      <h2>Contacts</h2>
      <ContactList />
      {/* <ToastContainer /> */}
    </div>
  );
}
