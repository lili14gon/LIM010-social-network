const createData = (post, correo) => firebase.firestore().collection('Posts').add({
  text: post,
  email: correo,
});

export {
  createData,
};
