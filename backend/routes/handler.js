const express = require("express");
const router = express.Router();
const data = require("../data");

const yup = require("yup");
const AddGatwaySchema = yup.object({
  body: yup.object({
    id: yup.string().required("invalid data"),
    displayName: yup.string("invalid data").required("invalid data"),
    ipv4_address: yup
      .string("invalid data")
      .min(8)
      .max(40)
      .required("invalid data"),
  }),
});
let myData = [...data];

const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (err) {
    return res.status(500).json({ type: err.name, message: err.message });
  }
};

// show gatways and devices
router.get("/Gatways", (req, res) => {
  res.end(JSON.stringify(myData));
});

// add gatway

router.post("/addGatway", validate(AddGatwaySchema), (req, res) => {
  myData.push(req.body);

  res.json({ message: "done" });
});

// add device
router.post("/addDevice", (req, res) => {
  // myData.push(req.body)
  myData.filter((gatway) =>
    gatway.ipv4_address == req.body.gatwayip
      ? gatway.p_devices.length < 10
        ? gatway.p_devices.push(req.body.device)
        : res.json({ message: "we canot add more" })
      : null
  );
  res.json({ message: "done" });
});

//    delete device
router.delete("/device", (req, res) => {
  myData.some((gatway) =>
    gatway.p_devices.filter((device) =>
      device.uid == req.body.deviceuid
        ? myData.p_devices.pop(gatway.p_devices)
        : res.json({ status: "failed" })
    )
  );
  res.json({ status: "success" });
});

//  delete gatway

router.delete("/gatway", (req, res) => {
  myData.filter((gatway) =>
    gatway.ipv4_address == req.body.gatwayip
      ? myData.pop(gatway)
      : res.json({ status: "failed" })
  );

  res.json({ status: "success" });
});

module.exports = router;
