import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <p>Total contacts: {contacts.length}</p>
      <ul className={s['list']}>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
