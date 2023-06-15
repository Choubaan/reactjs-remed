import React from "react";
import { Box, VStack, Text, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function CredentialCard({credential, onDelete}) {

    const navigate = useNavigate();


    return (
        <>
            <Box borderWidth={2} p={4} bg="gray.300" position="relative">
                <VStack align="start">
                    <Text>{credential.name}</Text>
                    <Text>{credential.url}</Text>
                    <Text>{credential.username}</Text>
                    <Text>{credential.password}</Text>
                </VStack>
                <Box position="absolute" bottom={2} right={1}>
                    <IconButton icon={<EditIcon/>} onClick={() => navigate(`/credentials/${credential.id}/edit`)} />
                    <IconButton icon={<DeleteIcon/>} onClick={() => onDelete(credential.id)}/>
                </Box>
            </Box>
        </>
    )
}

export default CredentialCard;