import { useRouter } from "next/router";
import { NextPage, GetServerSideProps } from 'next';
import UserCard from '../../components/usercard';

interface IUserProps {
    id: string;
    username: string;
    image_uri?: string;
}

const User = ({ userData }: {userData: IUserProps }  ) => {
    if ( userData ) {
        return (<div> 
            <UserCard userData={userData} ></UserCard>
            </div>)
    } else return <div>empty</div>;
  
}

export const getServerSideProps: GetServerSideProps = async ( context ) => {
    if( !context.params){
        return <h2>404</h2>
    }
    const query = Object.values(context.params)[0];
    const URL = 'https://ddeddd64-0f7a-4585-bb92-085da5426487.mock.pstmn.io'
    const fURL = `${URL}/user/?id=${query}`

    const options: RequestInit  = {
        method: 'GET',
        headers: {
            'x-api-key': 'PMAK-629c72facbc064566cbf6970-f56e8b3cd0bb15d00963f18afc158dc1d2'
        },
        mode: 'cors',
        cache: 'default'
    }

    const response = await fetch(fURL , options);
    const data = await response.json();
    console.log(data)

    return {
        props: {
            userData: data ,
        },
    }
}

export default User;