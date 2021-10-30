import React from 'react';
import Grid from '../components/shared/Grid';
import TransparentCard from '../components/shared/TransparentCard';
import ZoomCard from '../components/shared/ZoomCard';
import { jackProjects } from '../data';

export default function SelectedWork() {
    return (
        <>
            {/* <Grid cardsArr={jackProjects} /> */}
            {/* <ZoomCard/> */}
            <TransparentCard/>
        </>
    )
}
