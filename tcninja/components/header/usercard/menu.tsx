import { useState } from 'react';
import type { ReactElement } from 'react'
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { signOut } from "next-auth/react"

interface IUserDropDownMenuProps {
    username: string | undefined | null
}

const UserDropDownMenu = ({ username }: IUserDropDownMenuProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <IconButton onClick={handleClick}>
                < ArrowDropDownIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id='user-menu'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                sx={{
                    display: "flex",
                    flex: "column",
                    justifyContent: "flex-start",
                    justifyItems: "flex-start"
                }}
            >
                <MenuItem sx={{
                    display: "flex",
                    flexDirection: {xs: "row"},
                    alignItems: "flex-start"

                }}>
                    <p>Signed in as
                        <br />
                        <b>{username}</b>
                    </p>
                </MenuItem>
                <Divider />
                <MenuItem>
                    Your Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={(e) => { e.preventDefault(); signOut(); }}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </div>


    )
}

export default UserDropDownMenu;