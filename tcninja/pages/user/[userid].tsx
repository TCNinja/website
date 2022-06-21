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

export default User;