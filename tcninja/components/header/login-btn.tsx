import { useSession, signIn, signOut } from "next-auth/react"

const LoginButton = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
        <div>
          {session?.user && (
            <div>
                <small>Hello,</small>
                <br />
                <strong>{session.user.name || session.user.email}</strong> 
                <a href={`/api/auth/signout`} onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}>
                Sign out
              </a>
            </div>)}
          {!session && (
            <div>
                You are not signed in
              <a href={`/api/auth/signin`}
                  onClick={(e) => {
                  e.preventDefault();
                  signIn(); }}>
                Sign in
              </a></div>
          )}
        </div>
  );
}

export default LoginButton;
