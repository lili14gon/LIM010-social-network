const createData = (post, correo, id, estado) => firebase.firestore().collection('Posts').add({
  text: post,
  email: correo,
  idUsuario: id,
  privacidad: estado,
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
const addComment = (text, email, postId, id) => firebase.firestore().collection('Posts').doc(postId).collection('comment')
  .add({
    comment: text,
    correo: email,
    idPost: postId,
    idUsuario: id,
  });
const readComent = (idPost, callback) => {
  firebase.firestore().collection('Posts').doc(idPost).collection('comment')
    .onSnapshot((datos) => {
      const data = [];
      datos.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
        console.log(data);
      });
      callback(data);
    });
};
const deleteComment = (idD, id) => firebase.firestore().collection('Posts').doc(idD).collection('comment')
  .doc(id)
  .delete();
const editComment = (idD, id, newText) => firebase.firestore().collection('Posts').doc(idD).collection('comment')
  .doc(id)
  .update({
    text: newText,
  });
export {
  createData,
  readPost,
  deletePost,
  editPost,
  addComment,
  readComent,
  deleteComment,
  editComment,
};
