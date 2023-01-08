import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeUser } from "../store/slices/user.slice";
import send from "../images/send.png";

import pokebola from "../images/pokebola.png";

const UserInput = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    dispatch(changeUser(userName));
    navigate("/pokedex");
  };

  return (
    <div className="container__principal">
      <img className="img-pokeball-1" src={pokebola} alt="" />

      <form action="" className="form-principal" onSubmit={submit}>
        <p className="input-principal__text">
          What is your name <b>TRAINER</b>
        </p>
        <input
          className="input-principal"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Name"
        />
        <button className="btn-input__principal">
          <img className="btn-input__principal-img" src={send} alt="" />
        </button>
      </form>
    </div>
  );
};

export default UserInput;
