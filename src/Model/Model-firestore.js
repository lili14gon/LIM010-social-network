const createData = (post, correo, id) => firebase.firestore().collection('Posts').add({
  text: post,
  email: correo,
  idUsuario: id,
});
const readPost = (llamado) => {
  firebase.firestore().collection('Posts').onSnapshot((datos) => {
    const array = [];
    datos.forEach((doc) => {
      array.push(doc.data());
    });
    llamado(array);
  });
};

export {
  createData,
  readPost,
};
