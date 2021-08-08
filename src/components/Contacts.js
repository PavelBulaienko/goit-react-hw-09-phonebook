import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { operations } from '../redux/phonebook-operations';
import { getVisibleContacts } from '../redux/phonebook-selectors';

const Contacts = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const deleteContact = (id) => dispatch(operations.deleteContact(id));

  return (
    <ul className="nameList">
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <li key={id} className="item">
            <p className="name">
              {name}: {number}
            </p>
            <button type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Contacts;
