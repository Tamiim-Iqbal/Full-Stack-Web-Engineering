'use client'
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation";

const NewUserPage = () => {

    const handleAddNewUser = async(e) =>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newUser = Object.fromEntries(formData.entries())
        console.log(newUser)

        // Send the new user data to the server
        const res = await fetch('http://localhost:5001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        console.log('Server response:', res)

        const afterSubmit = await res.json()
        console.log('After submit:', afterSubmit)

        if(afterSubmit.insertedId){
            alert('User added successfully!')
            redirect('/users')
        } 
        else {
            alert('Failed to add user.')
        }



    }

    return (
        <div>
            <form onSubmit={handleAddNewUser}>
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
                        <Input id="fieldgroup-name" name="name" placeholder="Jordan Lee" />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
                        <Input
                            id="fieldgroup-email"
                            name="email"
                            type="email"
                            placeholder="name@example.com"
                        />
                        <FieldDescription>
                            We&apos;ll send updates to this address.
                        </FieldDescription>
                    </Field>
                    <Field orientation="horizontal">
                        <Button type="reset" variant="outline">
                            Reset
                        </Button>
                        <Button type="submit">Submit</Button>
                    </Field>
                </FieldGroup>
            </form>
        </div>
    );
};

export default NewUserPage;