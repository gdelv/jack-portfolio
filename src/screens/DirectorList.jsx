import React from "react";
import Grid from "../components/shared/Grid";
import PageHeader from "../components/shared/PageHeader";
import { directoringWork } from "../data";

export default function DirectorList() {
  return (
    <>
      <PageHeader title="Director" subtitle="Pieces" />
      <Grid cardsArr={directoringWork} singleCard={3} />
    </>
  );
}
