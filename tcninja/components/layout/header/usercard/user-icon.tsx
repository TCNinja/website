import Avatar from '@mui/material/Avatar'

interface IUserIconProps {
    imgSrc: string | undefined
}

const UserIcon = ({imgSrc}:IUserIconProps) => {

        return <Avatar src={imgSrc} color="inherit" />
}

export default UserIcon;