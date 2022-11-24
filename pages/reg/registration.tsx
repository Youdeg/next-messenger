import { useRouter } from "next/router";
import { useState } from "react";
import Auth from "../../src/pages/auth/Auth";
import { User, UserAPI } from "../../src/services/UserService";

const Registration = () => {
    const router = useRouter();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ registerUser, { error } ] = UserAPI.useRegisterUserMutation();

    const changePage = () => {
        router.push("/login", undefined, { shallow: true });
    }

    const registration = async (user: User) => {
        setIsLoading(true);
        await registerUser(user);
        setIsLoading(false);
    }

    return <Auth isLogin={false} footerOnClick={changePage} authCallback={registration} isLoading={isLoading} error={error}/>
}

export default Registration;