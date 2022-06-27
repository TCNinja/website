import ICard from "../../common/models/card";

interface ICardProps {
    cardId: string,
    cardSize: 'small' | 'medium' | 'large'
}

const Card = ({cardId, cardSize}: ICardProps) => {
    return(
        <div>Card Component</div>
    )
} 

export default Card;