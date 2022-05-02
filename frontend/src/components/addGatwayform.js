import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";

import { Link, Redirect } from "react-router-dom";

export default (props) => {
  const axios = require("axios");
  const [clearform, setClearform] = useState(true);

  const formik = useFormik({
    initialValues: {
      //   email: "",
      id: "",
      displayName: "",

      ipv4_address: uuidv4(),
    },
    // validationSchema: Schema,
    // validateOnChange: false, // this one
    // validateOnBlur: false,
    onSubmit: (values) =>
      axios
        .post(
          "/addGatway",

          {
            id: values.id,
            displayName: values.displayName,

            ipv4_address: values.ipv4_address,
          }
        )
        .then(function (response) {
          console.log(response);
          props.handleGetgatways();
          setClearform(false);
        })
        .catch(function (error) {
          console.log(error);
        }),
  });
  useEffect(() => {
    if (!clearform) {
      formik.resetForm({
        id: "",
        displayName: "",
        ipv4_address: uuidv4(),
      });

      setClearform(true);
    }
    // !clearform?console.log("1"):console.log("2")
  });

  return (
    <form
      className="auth-forgot-password-form mt-0.5"
      onSubmit={formik.handleSubmit}
    >
      <div class="row">
        <div class="mb-3 col-6">
          <label className="w-100 text-left" for="displayName">
            gatway name
          </label>

          <input
            onChange={formik.handleChange}
            value={formik.values.displayName}
            id="displayName"
            name="displayName"
            class="form-control form-control-sm"
            type="text"
            placeholder="gatway name"
            aria-label="default input example"
          />
        </div>
        <div class="mb-3 col-6">
          <label className="w-100 text-left" for="id">
            gatway ip
          </label>

          <input
            onChange={formik.handleChange}
            value={formik.values.id}
            id="id"
            name="id"
            class="form-control form-control-sm"
            type="text"
            placeholder="Default input"
            aria-label="default input example"
          />
        </div>

        <div className="col-12 text-left">
          <button
            color="primary"
            type="submit"
            className="btn btn-primary   btn-theme"
          >
            add gatway
          </button>
        </div>
      </div>
    </form>
  );
};
