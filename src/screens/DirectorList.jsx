import React, { useEffect, useState }  from "react";
import Grid from "../components/shared/Grid";
import PageHeader from "../components/shared/PageHeader";
// import { directoringWork } from "../data";
import firebase from "../firebase";


export default function DirectorList() {
  const [projects, setProjects] = useState([])
  const ref = firebase.firestore().collection("projects")
  let finalArr = [];

  useEffect(() => {
    if (!projects.length) {
      ref
        .where('isVideo','==', true)
        .orderBy('sortPosition', 'asc')
        .get()
        .then((snapshot) => {
          snapshot.forEach(doc => {
            finalArr.push(doc.data())
            });
            setProjects(finalArr);
        })
    }
  })
  return (
    <>
      <PageHeader title="Director" subtitle="Pieces" />
      <Grid cardsArr={projects} singleCard={3} />
    </>
  );
}
