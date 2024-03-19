function auth({ app, redirect }) {
  if (!app.$auth.loggedIn) {
    return redirect("/");
  }
}
export {
  auth as default
};
//# sourceMappingURL=auth-46b1dde4.js.map
