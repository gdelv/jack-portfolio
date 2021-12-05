import React from "react";
import Grid from "../components/shared/Grid";
import PageHeader from "../components/shared/PageHeader";
import { selectedWork } from "../data";

export default function SelectedWork() {
  return (
    <>
      <PageHeader title="Selected" subtitle="Work" />
      <Grid cardsArr={selectedWork} singleCard={2} />
    </>
  );
}
