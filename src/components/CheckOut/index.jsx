import React, { useReducer } from "react";
import styles from "./CheckOut.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../redux/slices/productSlice";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "../CustomInput/СustomInput";
import { deleteAll } from "../../redux/slices/productSlice";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Імя не може бути таким коротким")
    .max(10, "Імя не може бути таким довгим")
    .required("Це поле обовязкове для заповнення!"),
  lastName: Yup.string()
    .min(2, "Призвіще не може бути таким коротким")
    .max(15, "Призвіще не може бути таким довгим")
    .required("Це поле обовязкове для заповнення!"),
  age: Yup.number()
    .min(16, "Занадто малий вік")
    .max(100, "Вік занадто великий!")
    .required("Це поле обовязкове для заповнення!"),
  phone: Yup.number().min(10, 'Ваш номер не може бути коротший за 10 символів').required('Це поле обовязкове для заповнення!'),
  city: Yup.string()
    .min(3, "Такого міста не існує")
    .max(10, "Такого міста не існує")
    .required("Це поле обовязкове для заповнення!"),
  street: Yup.string()
    .min(3, "Такої вулиці не існує")
    .max(20, "Такої вулиці не існує")
    .required("Це поле обовязкове для заповнення!"),
});

const initialValues = {
  name: localStorage.getItem("name") || "",
  lastName: localStorage.getItem("lastName") || "",
  age: localStorage.getItem("age") || "",
  phone: localStorage.getItem("phone") || "",
  city: localStorage.getItem("city") || "",
  street: localStorage.getItem("street") || "",
};

const saveToLs = (name, value) => {
    localStorage.setItem(name, value.toString());
}
const clearLS = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("lastName");
    localStorage.removeItem("age");
    localStorage.removeItem("phone");
    localStorage.removeItem("city");
    localStorage.removeItem("street");
  };


export default function CheckOut({ firstClick, firstText }) {
  const array = useSelector((state) => state.products.data);
  const cartArray = array.filter((el) => el.quantity > 0);
  let sum = cartArray.reduce((acc, num) => {
    return acc + num.price;
  }, 0);
  sum = Math.round(sum * 100) / 100;
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerGroup}>
        <div className={styles.header}>
          <div className={styles.rectangle}></div>
          <h2>Check Out</h2>
        </div>
        <div className={styles.headerSecond}>
          <h2>Billing Details</h2>
        </div>
      </div>
      <div className={styles.wrapperForm}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, {resetForm}) => {
            resetForm();
            clearLS();
            console.log(values);
            console.log(cartArray);
            
            dispatch(deleteAll());
          }}
        >
          <Form className={styles.form} action="">
            <div className={styles.nameWrapper}>
              <CustomInput name="name" label="Name" type="text" placeholder="Enter your name" customChange = {(value, name) => {saveToLs(value, name)}} />
              <CustomInput name="lastName" label="Last Name" type="text" placeholder="Enter your last name" customChange = {(value, name) => {saveToLs(value, name)}}/>
            </div>

            <div className={styles.ageWrapper}>
            <CustomInput name="age" label="Age" type="number" placeholder="Enter your Age" customChange = {(value, name) => {saveToLs(value, name)}}/>
            <CustomInput name="phone" label="Phone Number" type="number" placeholder="Enter your phone number" customChange = {(value, name) => {saveToLs(value, name)}}/>
            </div>

            <div className={styles.adressWrapper}>
            <CustomInput name="city" label="City" type="text" placeholder="Enter your city" customChange = {(value, name) => {saveToLs(value, name)}}/>
            <CustomInput name="street" label="Street" type="text" placeholder="Enter your street" customChange = {(value, name) => {saveToLs(value, name)}}/>
            </div>

            <button className={styles.btn} type="submit">Confirm order</button>
          </Form>
        </Formik>
        <div className={styles.windowFav}>
          <h3>Order Sumary</h3>
          {cartArray.map((el) => (
            <div key={el.id} className={styles.cartWrapper}>
              <div className={styles.line}></div>
              <div className={styles.cart}>
                <img className={styles.img} src={el.img} alt="logo" />
                <p>{el.name}</p>
                <p>{el.price}</p>
                <button
                  onClick={() => {
                    dispatch(deleteCart(el.id));
                  }}
                  className={styles.close}
                >
                  &#10060;
                </button>
              </div>
              <div className={styles.line}></div>
            </div>
          ))}
          <h3>Total price: {sum}</h3>
        </div>
      </div>
    </div>
  );
}
