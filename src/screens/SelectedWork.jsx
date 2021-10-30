import React from 'react';
import Grid from '../components/shared/Grid';
import { jackProjects } from '../data';

export default function SelectedWork() {
    return (
        <>
            <Grid cardsArr={jackProjects} />
        </>
    )
}
