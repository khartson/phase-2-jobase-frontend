import React from 'react';
import JobItem from './JobItem'; 
import { Container, Stack } from 'react-bootstrap'; 

function Applied() {
    return(
        <Container>
        <Stack gap={3}>
            <JobItem></JobItem>
            <JobItem></JobItem>
            <JobItem></JobItem>
            <JobItem></JobItem>
        </Stack>
        </Container>
    )
}

export default Applied; 