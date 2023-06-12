import PropTypes from 'prop-types';

import ListElement from 'components/ListElement/ListElement';

const ContactList = ({ data, deleteContact }) => {
  return (
    <ul>
      {data
        .sort((elementA, elementB) =>
          elementA.name.localeCompare(elementB.name)
        )
        .map(element => (
          <li key={element.id}>
            <ListElement element={element} deleteContact={deleteContact} />
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
