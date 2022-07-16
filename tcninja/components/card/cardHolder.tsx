import React from 'react'
import CardDisplay from './cardDisplay';
import Box from '@mui/material/Box'

interface ICardHolderProps {
  id: string;
  imageUri: string;
  name: string;
  details: any;
}

export default function cardHolder( { id, imageUri, name, details }: ICardHolderProps ) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '200px',
      height: '104px',
      bgcolor: 'primary.background.paper',
    }}>
        <CardDisplay id={id} imageUri={imageUri} name={name} details={details} />
    </Box>
  )
}

