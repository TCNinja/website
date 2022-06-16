import { useSession, signIn, signOut } from "next-auth/react"
import Avatar from '@mui/material/Avatar'

const UserIcon = () => {
    const { data: session, status } = useSession();
    if (session){
        return (
            // <Avatar src={session?.user?.image?}   />
        )
    }
}

export default UserIcon;