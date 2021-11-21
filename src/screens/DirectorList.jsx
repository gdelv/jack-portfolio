import React from 'react'
import Grid from '../components/shared/Grid';
import { directoringWork } from '../data'


export default function DirectorList() {
    return (
        <>
            <Grid cardsArr={directoringWork} singleCard={3} />
        </>
    )
}
