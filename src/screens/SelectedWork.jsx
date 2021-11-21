import React from 'react';
import Grid from '../components/shared/Grid';
import { selectedWork } from '../data';

export default function SelectedWork() {
    return (
        <>
            <Grid cardsArr={selectedWork} singleCard={2} />
        </>
    )
}
