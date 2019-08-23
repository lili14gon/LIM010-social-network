const createData = (post, correo, id) => firebase.firestore().collection('Posts').add({
  text: post,
  email: correo,
  idUsuario: id,
  // privacidad: estado,
});
const readPost = (llamado) => {
  console.log(llamado);
  firebase.firestore().collection('Posts').onSnapshot((datos) => {
    const array = [];
    datos.forEach((doc) => {
      array.push({ id: doc.id, ...doc.data() });
    });
    llamado(array);
  });
};
const deletePost = idD => firebase.firestore().collection('Posts').doc(idD).delete();

const editPost = (id, newText) => firebase.firestore().collection('Posts').doc(id).update({
  text: newText,
});

export {
  createData,
  readPost,
  deletePost,
  editPost,
};
