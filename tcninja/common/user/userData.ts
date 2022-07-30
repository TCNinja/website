export default interface IUserData {
    id: string;
    username: string,
    imageUri: string,
    cardsList: ICardData[],
}

interface ICardData {
    id: string;
    imageUri: string;
    name: string;
    [details: string]: string;
}