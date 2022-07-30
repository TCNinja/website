import React from 'react';
import CardImage from './cardImage';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

interface ICardDisplayProps {
  id: string,
  imageUri: string,
  name: string,
  [details: string]: string
}


const CardDisplay = ({ id, imageUri, name, details }: ICardDisplayProps) => {
  const detailsMap: any[] = []; // TODO, unarabize
  Object.entries(details).forEach(([key, value]) => {
    detailsMap.push(<ListItem>
      <Typography>
        {`${key}: ${value}`}
      </Typography>
    </ListItem>)
  });

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);


  return (
    <div>
      <Box
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          position: 'sticky',
          zIndex: 2
        }}
      >
        <CardImage
          imageUri={imageUri}
          name={name}
        />
      </Box>
      <Popover
        id="mouse-over-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          zIndex: 1
        }}
      >
        <Typography variant="h6">Card Details</Typography>
        <List>
          {detailsMap}
        </List>
      </Popover>
    </div>
  )
}

export default CardDisplay;
