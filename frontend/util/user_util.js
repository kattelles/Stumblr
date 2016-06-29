module.exports = {
  updateUser(data, cb1, cb2) {
    $.ajax({
      url: `api/users/${data.user.id}`,
      method: "PATCH",
      data: data,
      success: (user) => {
        cb1(user);
        cb2();
      }
    });
  }
};
