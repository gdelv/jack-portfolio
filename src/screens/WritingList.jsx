import React from "react";
import Grid from "../components/shared/Grid";
import PageHeader from "../components/shared/PageHeader";
import { writingWork } from "../data";

export default function WritingList() {
  return (
    <>
      <PageHeader title="Writing" subtitle="Pieces" />
      <Grid cardsArr={writingWork} singleCard={1} />
    </>
  );
}
