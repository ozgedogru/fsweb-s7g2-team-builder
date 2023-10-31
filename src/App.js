import "./App.css";
import Form from "./components/Form";

function App(props) {
  const { memberList, addMember } = props;

  return (
    <>
      <h1>Uye Formu</h1>
      <hr />
      <Form />
      <div addMember={addMember} memberList={memberList}>
        <ul>
          {memberList?.map((m) => {
            return <li>{m.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
