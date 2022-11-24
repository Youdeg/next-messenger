import { useRouter } from "next/router";
import Auth from "../../src/pages/auth/Auth";

const Login = () => {
    const router = useRouter();

    const changePage = () => {
        router.push("/reg", undefined, { shallow: true });
    }

    return <Auth isLogin={true} footerOnClick={changePage} />
}

export default Login;