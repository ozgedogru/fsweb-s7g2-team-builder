import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [memberList, setMemberList] = useState([]);

  console.log("memberList: ", memberList);

  return (
    <>
      <h2>Uye Formu</h2>
      <hr />
      <Form memberList={memberList} setMemberList={setMemberList} />
      <h2>Uye Liste</h2>
      <hr />
      <div>
        <ul>
          {memberList?.map((m) => (
            <li>{m.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
