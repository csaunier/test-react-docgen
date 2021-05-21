import React from "react"
import propTypes from "prop-types"
import { exportedTypes } from "./types";

export const Button = () => {
  return <button>Yolo</button>
}

Button.propTypes = {
  ...exportedTypes,
  foo: propTypes.number.isRequired
}