import React from "react";
import { Button, Box, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate();

    const handleClickButton = (e) => {
        e.preventDefault();

        navigate("/credentials")
    }

    return (
        <Box>
            <Heading as="h2" size="xl" mb={5}>
                Welcome To Password Manager
            </Heading>
            <Button colorScheme="blue" onClick={handleClickButton}>
                Get Started
            </Button>
        </Box>
        
    )
}

export default HomePage;