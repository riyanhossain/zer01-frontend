import { UserContext } from "@/context/userContext";
import { useRouter } from "next/router";
import React from "react";

const useAuthRoute = () => {
    const { state } = React.useContext(UserContext);
    const router = useRouter();

    React.useEffect(() => {
        if (!state?.user && !state?.token) {
            router.push("/login");
        }
    }, [state.user]);
};

export default useAuthRoute;
