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

  useEffect(() => {
    console.log("formData: ", formData);
  }, [formData]);

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Ad/Soyad : </label>
        <input
          id="name"
          type="text"
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="user-mail">E-mail : </label>
        <input
          id="user-mail"
          type="email"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="rol">Rol : </label>
        <input
          id="rol"
          type="text"
          onChange={(e) => {
            setFormData({ ...formData, rol: e.target.value });
          }}
        />
      </div>

      <button type="submit">Ekle!</button>
    </form>
  );
}

export default Form;
