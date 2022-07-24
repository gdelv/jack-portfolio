import React, { useEffect, useState }  from "react";
import Grid from "../components/shared/Grid";
import PageHeader from "../components/shared/PageHeader";
// import { selectedWork } from "../data";
import firebase from "../firebase";

export default function SelectedWork() {
  const [projects, setProjects] = useState([])
  const ref = firebase.firestore().collection("projects")
  let finalArr = [];

  useEffect(() => {
    if (!projects.length) {
      ref
        .where('isSelectedWork','==', true)
        .orderBy('selectedSortPosition', 'asc')
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
      <PageHeader title="JackSimon" subtitle="DirectorWriter" />
      <Grid cardsArr={projects} singleCard={2} />
    </>
  );
}
