// const createData = (post, correo, id, estado) => firebase.firestore().collection('Posts').add({
//   text: post,
//   email: correo,
//   idUsuario: id,
//   privacidad: estado,
// });
const createData = (post, correo, id, estado, likes, date) => firebase.firestore().collection('Posts').add({
  text: post,
  email: correo,
  idUsuario: id,
  privacidad: estado,
  like: likes,
  time: date,
});
const readPost = (llamado) => {
  console.log(llamado);
  firebase.firestore().collection('Posts').orderBy('time', 'desc').onSnapshot((datos) => {
    const array = [];
    datos.forEach((doc) => {
      console.log(doc);
      array.push({ id: doc.id, ...doc.data() });
    });
    llamado(array);
  });
};
const deletePost = idD => firebase.firestore().collection('Posts').doc(idD).delete();


const editLikes = (idD, newLikes) => firebase.firestore().collection('Posts').doc(idD).update({
  like: newLikes,
});

const editPost = (id, newText) => firebase.firestore().collection('Posts').doc(id).update({
  text: newText,
});
const addComment = (text, email, postId, id, date) => firebase.firestore().collection('Posts').doc(postId).collection('comment')
  .add({
    comentario: text,
    correo: email,
    idPost: postId,
    idUsuario: id,
    time: date,
  });
const readComent = (idPost, callback) => {
  firebase.firestore().collection('Posts').doc(idPost).collection('comment').orderBy('time', 'desc')
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
    comentario: newText,
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
  editLikes,
};
