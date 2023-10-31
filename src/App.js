import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [memberList, setMemberList] = useState([]);

  return (
    <>
      <h2>Form</h2>
      <hr />
      <Form memberList={memberList} setMemberList={setMemberList} />
      <h2>List</h2>
      <hr />
      <div>
        <ul class="list-group list-group-flush">
          {memberList?.map((m) => (
            <>
              <li class="list-group-item">
                {m.name} ({m.rol}) : {m.email}
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
