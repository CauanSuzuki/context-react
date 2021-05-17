import React, { useState } from "react";
import { useFormik } from "formik";

function Register() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      aceiteTermos: "",
      sexo: "",
      select: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="aceiteTermos">termos</label>
      <input
        id="aceiteTermos"
        name="aceiteTermos"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.aceiteTermos}
      />
      <label htmlFor="sexo"> Masculino </label>
      <input
        id="sexo"
        name="sexo"
        type="radio"
        onChange={formik.handleChange}
        value="Masculino"
      />
      <label htmlFor="sexo"> Feminino </label>
      <input
        id="sexo"
        name="sexo"
        type="radio"
        onChange={formik.handleChange}
        value="Feminino"
      />
      <label>
        Pagamento:
        <select
          id="select"
          name="select"
          type="radio"
          onChange={formik.handleChange}
          value={formik.values.select}
        >
          <option value="Cartão Crédito">Cartão Crédito</option>
          <option value="Cartão Débito">Cartão Débito</option>
          <option value="Boleto">Boleto</option>
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Register;