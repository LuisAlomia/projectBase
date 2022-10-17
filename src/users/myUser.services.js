const userControllers = require("./users.controllers");

const getMyUser = (req, resp) => {
  const { id } = req.user;

  userControllers
    .getUserById(id)
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const deleteMyUser = (req, resp) => {
  const { id } = req.user;

  userControllers
    .daleteUser(id)
    .then((data) => resp.status(204))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const patchMyUser = (req, resp) => {
  const { id } = req.user;
  const { name, password } = req.body;

  userControllers
    .updateUser(id, { name, password })
    .then((data) => {
      data[0]
        ? resp.status(200).json({ message: `Update Record` })
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

module.exports = { getMyUser, deleteMyUser, patchMyUser };
