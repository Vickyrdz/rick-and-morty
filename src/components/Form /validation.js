

const validation = (userData, errors, setErrors) => {

  if (!userData.email)
    setErrors({ ...errors, email: "Por favor completa este campo" });
  else if (userData.email.length > 35)
    setErrors({ ...errors, emai: "No puede superar los 35 carácteres" });
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
    setErrors({ ...errors, email: "Email inválido" });
  } else {
    setErrors({ ...errors, email: "" });
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    setErrors({ ...errors, password: "Longitud de password inválida" });
  } else if (!/\d/.test(userData.password)) {
    setErrors({ ...errors, password: "Debe contener al menos un número" });
  } else {
    setErrors({ ...errors, password: "" });
  }
};







export default validation; 