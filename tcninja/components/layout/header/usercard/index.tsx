import { useSession, signIn, signOut } from "next-auth/react"
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import UserIcon from './user-icon';
import UserDropDownMenu from './menu';
import IconButton from '@mui/material/IconButton';

const UserCard = () => {
    const { data: session, status } = useSession();
    if (status === 'unauthenticated') {
        return (<Button color="inherit"
            href={`/api/auth/signin`}
            onClick={(e) => { e.preventDefault(); signIn(); }} >
            <b>Sign In</b>
        </Button>)
    }
    if (status === 'authenticated') {
        const username: string | null | undefined = session?.user?.name;
        const userImgUri: string | undefined = session?.user?.image ? session.user.image : undefined;
        return (
            <Box sx={{
                display: "flex",
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'flex-end'
            }}>
                <IconButton href={'/user/' + username} sx={{ mr: -2 }} >
                    < UserIcon imgSrc={userImgUri} />
                </IconButton>
                <Box >
                    < UserDropDownMenu username={session?.user?.name} />
                </Box>
            </Box>

        );
    } else return null;
}

export default UserCard;