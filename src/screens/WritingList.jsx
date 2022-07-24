import React, { useEffect, useState } from "react";
import Grid from "../components/shared/Grid";
import PageHeader from "../components/shared/PageHeader";
// import { writingWork } from "../data";
import firebase from "../firebase";

export default function WritingList() {
const [projects, setProjects] = useState([])
const ref = firebase.firestore().collection("projects")
let finalArr = [];

useEffect(() => {
  if (!projects.length) {
    ref
      .where('isWritingPiece','==', true)
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
      <PageHeader title="Writing" subtitle="Pieces" />
      <Grid cardsArr={projects} singleCard={1} />
    </>
  );
}
