import React from "react"
import propTypes from "prop-types"
import { exportedTypes } from "./types";

export const Button = () => {
  return <button>Yolo</button>
}

const spreadTypes = {
  bar: propTypes.string.isRequired
}

Button.propTypes = {
  ...spreadTypes,
  ...exportedTypes,
  id: propTypes.string,
  foo: propTypes.number.isRequired
}

Button.defaultValues = {
  id: ""
}