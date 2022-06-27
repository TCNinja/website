import ICard from "../../common/models/card";
import Box from '@mui/material/Box';
import Image, { ImageLoaderProps } from 'next/image';
interface ICardProps {
    cardId: string
}

const gathererWizardsLoader = ({src}: ImageLoaderProps) => {
    return `https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${src}&type=card`
  }

const Card = ({cardId }: ICardProps) => {
    return(
        <Box >
            <Image
            loader={gathererWizardsLoader}
            src={cardId}
            width={100}
            height={200}
            placeholder='blur' 
            blurDataURL="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=253488&type=card"
            />
        </Box>
    )
} 

export default Card;