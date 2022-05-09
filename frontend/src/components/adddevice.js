import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";

import { Link, Redirect } from "react-router-dom";
import Select from "react-select";

export default (props) => {
  const axios = require("axios");
  const [clearform, setClearform] = useState(true);
const stausOptions= [
  {
    value: "0",
    label: "offline",
  },
  {
    value: "1",
    label: "online",
  },
]
  const formik = useFormik({
    initialValues: {
      //   email: "",
      id: "",
      displayName: "",

      ipv4_address: uuidv4(),
      deviceStatus: "1",
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
  });

  return (
   
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              add device{" "}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form
              className="auth-forgot-password-form mt-0.5"
              onSubmit={formik.handleSubmit}
            >
              <div class="row">
                <div class="mb-3 col-6">
                  <label className="w-100 text-left" for="displayName">
                    device vendor
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
                    device uid
                  </label>

                  <input
                    onChange={formik.handleChange}
                    value={formik.values.id}
                    id="id"
                    name="id"
                    class="form-control form-control-sm"
                    type="number"
                    placeholder="Default input"
                    aria-label="default input example"
                  />
                </div>
                <div className="col-6 mb-3">
                  <Select
                  
                  
                    placeholder={
                       "Please select"
                    }
                    // value={
                    //   defaultValue(options, value)
                    //     ? defaultValue(options, value)
                    //     : ""
                    // }
                    onChange={(value) => {
                      // onChange(value);
                    }}
                    // options={}
                      options={stausOptions.map((option) => {
                    return { value: option.value, label: option.label };
                  })}
                    // styles={errorToggle == true ? isInvalid : customStyles}
                    // isMulti={isMultiple ? true : false}
                    // menuPosition={isFixed ? 'fixed' : 'absolute'}
                    // menuPortalTarget={
                    //   inDialog
                    //     ? document.querySelector(".MuiDialog-root")
                    //     : document.querySelector("body")
                    // }
                  />
                </div>
                <div className="col-12 text-left">
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
