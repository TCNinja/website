import { Avatar, Box } from '@mui/material';

interface IUserCardProps {
    id: string,
    username: string,
    image_uri?: string
}

const UserCard = ({ userData }: { userData: IUserCardProps }) => {

    return (
        <Box sx={{
            display: 'flex', flexDirection: "row", justifyContent: 'flex-start', alignItems: 'center' ,
            bgcolor: 'primary.main', p: 2, border: '2px solid grey',
            boxShadow: 1, width: 500, fontWeight: 'fontWeightLight'
        }}>
            <Avatar alt={userData.username} src={userData.image_uri} />
            <h2>{userData.username}</h2>
            <div>ID: {userData.id}</div>
        </Box>
    )

}

export default UserCard;