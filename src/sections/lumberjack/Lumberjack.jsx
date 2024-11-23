import { Container, Paper, Typography } from '@mui/material';
import React from 'react'

const Lumberjack = () => {
    return (
        <Paper
            variant='odd'
            sx={{
                minHeight: "88vh",
                padding: {xs: "2rem 0", md: "4rem"}
            }}
        >
            <Typography
                variant='h1'
            >
                LumberJack
            </Typography>
            <Container
                maxWidth="xl"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <iframe src='https://tbot.xyz/lumber/' height={"760px"} className='lumber'/>
            </Container>
        </Paper>
    );
};

export default Lumberjack;