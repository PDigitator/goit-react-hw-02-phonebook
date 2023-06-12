export const ListElement = ({
  element: { id, name, number },
  deleteContact,
}) => {
  return (
    <>
      <p>
        {name}:<span>{number}</span>
      </p>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </>
  );
};

export default ListElement;
