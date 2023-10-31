import { useEffect, useState } from "react";

function Form({ memberList, setMemberList }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rol: "",
  });

  function submitHandler(e) {
    console.log("Uye eklendi");
    e.preventDefault();

    addMember(formData);
  }

  function addMember(member) {
    {
      setMemberList([...memberList, member]);
    }
  }

  useEffect(() => {
    console.log("memberList", memberList);
  }, [memberList]);

  return (
    <form class="row gy-2 gx-3 align-items-center" onSubmit={submitHandler}>
      <div class="col-md-6">
        <label class="form-label " htmlFor="name">
          Ad/Soyad :{" "}
        </label>
        <input
          class="form-control"
          id="name"
          type="text"
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
      </div>
      <div class="col-md-6">
        <label class="form-label" htmlFor="user-mail">
          E-mail :{" "}
        </label>
        <input
          class="form-control"
          placeholder="email@example.com"
          id="user-mail"
          type="email"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
      </div>
      <div>
        <label class="form-label" htmlFor="rol">
          Rol :{" "}
        </label>
        <input
          class="form-control"
          id="rol"
          type="text"
          placeholder="frontend eng, backend eng, designer..."
          onChange={(e) => {
            setFormData({ ...formData, rol: e.target.value });
          }}
        />
      </div>
      <div>
        <button class="btn btn-secondary" type="submit">
          Ekle!
        </button>
      </div>
    </form>
  );
}

export default Form;
