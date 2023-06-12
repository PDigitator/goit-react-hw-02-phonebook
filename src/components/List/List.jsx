import { ListElement } from 'components/ListElement/ListElement';

const List = ({ data, deleteContact }) => {
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

export default List;
