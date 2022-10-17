const { check } = require("express-validator");
const validateResult = require("../middlewares/handleValidator.middleware");

const validateById = [
  check("id").exists().notEmpty().isUUID(),
  (req, resp, next) => validateResult(req, resp, next),
];

const validateRegisterUser = [
  check("name").exists().notEmpty().isString(),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isString(),
  (req, resp, next) => validateResult(req, resp, next),
];

const validatePatchUser = [
  check("id").exists().notEmpty().isUUID(),
  check("name").optional().notEmpty().trim().isString(),
  check("email").optional().notEmpty().trim().isEmail(),
  check("password").optional().notEmpty().trim().isString(),
  check("role").optional().notEmpty().trim().isString(),
  check("status").optional().notEmpty().trim().isString(),
  (req, resp, next) => validateResult(req, resp, next),
];

const validatePatchMyUser = [
  check("name").optional().notEmpty().trim().isString(),
  check("password").optional().notEmpty().trim().isString(),
  (req, resp, next) => validateResult(req, resp, next),
];

const validateLogin = [
  check("email").exists().notEmpty().trim().isEmail(),
  check("password").exists().notEmpty().trim().isString(),
  (req, resp, next) => validateResult(req, resp, next),
];

module.exports = {
  validateById,
  validateRegisterUser,
  validatePatchUser,
  validateLogin,
  validatePatchMyUser,
};
