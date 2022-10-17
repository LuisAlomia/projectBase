const Users = require("../models/users.model");

const getAllUsers = async () => {
  const data = await Users.findAll();
  return data;
};

const getUserById = async (id) => {
  const data = await Users.findOne({ where: { id } });
  return data;
};

const daleteUser = async (id) => {
  const data = await Users.destroy({ where: { id } });
  return data;
};

const updateUser = async (id, data) => {
  console.log(data);
  const updateData = await Users.update(data, { where: { id } });
  return updateData;
};

module.exports = {
  getAllUsers,
  getUserById,
  daleteUser,
  updateUser,
};
