import Link from "next/link";

const Login = () => {
    return (
        <div>
            <h1>
                Login
            </h1>
            <Link href='/'>
                <button>
                    home
                </button>
            </Link>
        </div>
    )
}

export default Login;