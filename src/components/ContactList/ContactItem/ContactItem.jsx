import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li key={id} id={id} className={s['item']}>
      <button
        onClick={() => onDeleteContact(id)}
        className={s['button']}
        type="Submit"
      >
        x
      </button>
      <div className={s['wrapper']}>
        <p className={s['text']}>{name}:</p>
        <p className={s['number']}>{number}</p>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
