import React from 'react';
import Box from '@mui/material/Box';
import Image, { ImageLoaderProps } from 'next/image';


interface ICardImageProps{
    name: string,
    imageUri: string
}

const CardImage = ({ name, imageUri }: ICardImageProps) => {

    return(
        <Box >
            <Image
            src={imageUri}
            alt={name}
            width={100}
            height={200}
            unoptimized={true}
            placeholder='blur'
            blurDataURL="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=253488&type=card"
            />
        </Box>
    )
} 

export default CardImage;