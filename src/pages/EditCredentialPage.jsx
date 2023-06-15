import {useState, useEffect} from "react";
import { Heading, VStack, Box, FormLabel, Input, Button, FormControl  } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

function EditCredentialPage() {
    const navigate = useNavigate();
    const params = useParams();
   
    const fetchDetailById = async (id) => {
        try {
            const response = await fetch(`http://localhost:3300/credentials/${id}`)
            const data = await response.json();

            setName(data.name)
            setUrl(data.url)
            setUsername(data.username)
            setPassword(data.password)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchDetailById(params.id)
    }, []);
    
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch(`http://localhost:3300/credentials/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                }, 
                body: JSON.stringify({
                    nama: name,
                    url: url,
                    username: username,
                    password: password,
                })
            })

            navigate("/credentials")
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <VStack spacing={4} w="100%">
            <Heading as="h2" size="xl">
                Edit Credentials
            </Heading>
            <Box w="80%">
                <form onSubmit={handleSubmit}>
                    <VStack>
                        <FormControl>
                            <FormLabel>Nama</FormLabel>
                            <Input type="text" placeholder="Please Enter Name" w="100%" onChange={(e) => setName(e.target.value)} value={name}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>URL</FormLabel>
                            <Input type="text" placeholder="Please Enter Url" w="100%" onChange={(e) => setUrl(e.target.value)} value={url}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input type="text" placeholder="Please Enter Username" w="100%" onChange={(e) => setUsername(e.target.value)} value={username}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input type="text" placeholder="Please Enter Password" w="100%" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        </FormControl>
                        <Button colorScheme="blue" w="100%" type="submit">Edit Credential</Button>
                    </VStack>
                </form>
            </Box>
        </VStack>
    )
}

export default EditCredentialPage