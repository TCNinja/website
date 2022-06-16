import { useSession, signIn, signOut } from "next-auth/react"
import UserIcon from './user-icon'

import Button from "@mui/material/Button";

const LoginButton = () => {
  const { data: session, status } = useSession();
  const userImgUri: string | undefined = session?.user?.image ? session.user.image : undefined ;
  return (
      <div>
          { session?.user && (
            <div>
              < UserIcon imgSrc={ userImgUri } />
                <Button href={`/api/auth/signout`} onClick={ (e) => {
                  e.preventDefault();
                  signOut(); }} >
                    Sign Out
                </Button>
            </div>)}
          {!session && (
            <div>
                <Button href={`/api/auth/signin`} onClick={ (e) => {
                  e.preventDefault();
                  signIn(); }} >
                    Sign In
                </Button></div>
          )}
        </div>
  );
}

export default LoginButton;
