import Filter from 'components/Filter/Filter';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
// import { useMemo } from 'react';
// import { setFilters } from 'redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  // const filter = useSelector(state => state.filter);

  // const dispatch = useDispatch();

  return (
    <ul>
      {contacts.length !== 0 && <Filter />}
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
