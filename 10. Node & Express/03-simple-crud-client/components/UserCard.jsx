'use client'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import { useRouter } from "next/navigation";

const UserCard = ({ user }) => {
    const {_id} = user
    const router = useRouter()
    const handleDeleteUser = async (id) => {
        // console.log(`Delete user with ID: ${_id}`);
        const response = await fetch(`http://localhost:5001/users/${id}`, {
            method: 'DELETE',
        })

        const afterDelete = await response.json()
        console.log('After delete:', afterDelete)

        if (afterDelete.deletedCount > 0) {
            alert('User deleted successfully!')
            router.refresh()
        } 
        else {
            alert('Failed to delete user.')
        }
    }
    return (
        <div>
            <Card className="relative mx-auto w-full max-w-sm pt-0">
                <CardHeader>
                    <CardAction>
                        <h2>No Action</h2>
                    </CardAction>
                    <CardTitle>{user.name}</CardTitle>
                    <CardDescription>
                        Email: {user.email} <br />
                    </CardDescription>
                </CardHeader>
                <CardFooter className="grid grid-cols-3 gap-6">
                    <Link href={`/users/${user._id}`}>
                        <Button className="w-full">View Details</Button>
                    </Link>
                    <Link href={`/users/${user._id}/edit`}>
                        <Button variant="outline" className="w-full">Edit</Button>
                    </Link>
                    
                    <Button
                        onClick={() => handleDeleteUser(user._id)}
                        variant="destructive" className="w-full">
                        Delete
                    </Button>
                    
                </CardFooter>
            </Card>

        </div>
    );
};

export default UserCard;