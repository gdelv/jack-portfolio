import React from 'react';
import Grid from '../components/shared/Grid';
import { writingWork } from '../data';

export default function WritingList() {
    return (
        <Grid cardsArr={writingWork} singleCard={1}/>
    )
}
