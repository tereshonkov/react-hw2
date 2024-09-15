import { useField } from "formik";
import React from "react";
import styles from "./customInput.module.scss";
import classNames from "classnames";

export default function CustomInput({ label, customChange = null, ...props }) {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={field.name}>{label}</label>
      <input
        className={classNames({ [styles.error]: isError })}
        {...field}
        {...props}
        onChange={(e) => {
          if (customChange) {
            customChange(e.target.name, e.target.value);
          }
          field.onChange(e);
        }}
      />

      {isError && <span className={styles.span}>{meta.error}</span>}
    </div>
  );
}
