import { useSession, signIn, signOut } from "next-auth/react"
import Button from "@mui/material/Button";

const LoginButton = () => {
  const { data: session, status } = useSession();
  return (
      <div>
          {session?.user && (
            <div>
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
