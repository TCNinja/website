import { useRouter } from "next/router";
import { NextPage, GetServerSideProps } from 'next';
import { useSession } from "next-auth/react"
import { Box } from "@mui/system";
import { Paper, Avatar, Typography } from "@mui/material";
import UserCard from '../../components/usercard';

interface IUserProps {
    id: string;
    username: string;
    image_uri?: string;
}

// const User = ({ userData }: { userData: IUserProps }) => {
const User = () => {
    const { data: session, status } = useSession();
    const userImage: string | null | undefined = session?.user?.image;
    if (session) {
        return (
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                justifyItems: 'center',
                mt: '5rem'
            }}>
                <Box sx={{ //User Card
                    width: '70%',
                    height: 'auto',
                    display: 'inline-grid',
                    columnGap: '2rem',
                    gridTemplateColumns: '20rem auto'
                }}>
                    <Box sx={{
                        display: 'inline-flex',
                        flexDirection: 'column',
                        justifyContent: "flex-start"
                    }} >
                        <Avatar src={userImage}
                            sx={{
                                width: '20rem',
                                height: '20rem',
                                border: 'solid 1px gray'
                            }} />

                        <Typography variant='body2' sx={{ fontWeight: 500, fontSize: '2rem', mt: '5%' }} >
                            {session?.user?.name}
                        </Typography>
                    </Box>

                    <Typography variant="h4"
                        sx={{
                            display: 'inline-flex',
                            flexDirection: 'row',
                            justifyContent: "center",
                            textAlign: "center",
                            mt: '2rem'
                        }}>
                            Inventory
                    </Typography>
                </Box>
            </Box>)

    }

}

// export const getServerSideProps: GetServerSideProps = async (context) => {
// }

export default User;