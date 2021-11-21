import React from 'react'
import { ProjectConsumer } from "../context";

export default function Details() {
    return (
        <ProjectConsumer>
            {(value) => (
                <div>
                    <h1>{value.detailProject.name}</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/a_Gf1wg9BYY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            )}
        </ProjectConsumer>
    )
}
