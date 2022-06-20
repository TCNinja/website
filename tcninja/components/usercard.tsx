import { Avatar, Box } from '@mui/material';

interface IUserCardProps {
    id: string,
    username: string,
    image_uri?: string
}

const UserCard = ({ userData }: { userData: IUserCardProps }) => {

    return (
        <Box sx={{}}>
            <Avatar alt={userData.username} src={userData.image_uri} />
            <h2>{userData.username}</h2>
            <div>ID: {userData.id}</div>
        </Box>
    )

}

export default UserCard;