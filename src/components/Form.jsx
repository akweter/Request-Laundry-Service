import { FormGroup, FormLabel, Input, Select } from "@mui/material";
import { Container } from "@mui/system";


export default function Form(){
    return(
        <Container>
            <div>
                <form>
                    <FormGroup>
                        <FormLabel>Name: 
                        <Input type="text" placeholder="James Akweter" /></FormLabel>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Telephone: 
                            <Input type="tel"/>
                        </FormLabel>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Class: 
                            <Select/>
                        </FormLabel>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel></FormLabel>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel></FormLabel>
                    </FormGroup>
                </form>
            </div>
        </Container>
    );
}