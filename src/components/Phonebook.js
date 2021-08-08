import { useEffect, useState } from 'react';
import Contacts from './Contacts';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/actions';
import { operations } from '../redux/phonebook-operations';
import { getContacts } from '../redux/phonebook-selectors';

const Phonebook = () => {
  const [name, setName] = useState('');
  const handleInputName = (e) => {
    setName({ name: e.target.value });
  };

  const [number, setNumber] = useState('');
  const handleInputContact = (e) => {
    setNumber({ number: e.target.value });
  };

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);
  const addContact = (contact) => dispatch(operations.addContact(contact));
  const handleFilter = (e) => dispatch(actions.changeFilter(e.target.value));

  return (
    <>
      <form className="form">
        <label className="nameLabel">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleInputName}
          className="nameInput"
        />
        <label className="numberLabel">Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleInputContact}
          className="numberInput"
        />
        <button
          type="button"
          onClick={() =>
            addContact({
              name: name.name,
              id: shortid.generate(),
              number: number.number,
            })
          }
        >
          Add contact
        </button>
      </form>
      <h2>Contacts: </h2>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleFilter}
        className="nameFilter"
      />
      {contacts && <Contacts contacts={contacts} />}
    </>
  );
};

export default Phonebook;
