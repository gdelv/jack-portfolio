import React, { useEffect, useState }  from "react";
import Grid from "../components/shared/Grid";
import Loading from "../components/shared/Loading";
import PageHeader from "../components/shared/PageHeader";
// import { directoringWork } from "../data";
import firebase from "../firebase";


export default function DirectorList() {
  const [projects, setProjects] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
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
            setIsLoaded(true)
        })
    }
  })
  return (
    <>
      <PageHeader title="Director" subtitle="Pieces" />
      {isLoaded ? <Grid cardsArr={projects} singleCard={3} /> : <Loading/>}
    </>
  );
}
