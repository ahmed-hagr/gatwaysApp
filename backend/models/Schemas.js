const yup = require("yup");
const AddGatwaySchema = yup.object({
    body: yup.object({
      id: yup.string().required("invalid data"),
      displayName: yup.string("invalid data").required("invalid data"),
      ipv4_address: yup.string("invalid data").min(8).max(12).required("invalid data"),
    }),
    params: yup.object({
      id: yup.number().required(),
    }),
  });

module.exports = mySchemas;