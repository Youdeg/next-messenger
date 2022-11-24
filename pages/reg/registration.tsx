import { useRouter } from "next/router";
import Auth from "../../src/pages/auth/Auth";

const Registration = () => {
    const router = useRouter();

    const changePage = () => {
        router.push("/login", undefined, { shallow: true });
    }

    return <Auth isLogin={false} footerOnClick={changePage} />
}

export default Registration;