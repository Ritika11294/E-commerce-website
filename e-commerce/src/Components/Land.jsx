import {UserDetails} from "./UserDetails";
import {useSelector} from "react-redux";
import {Login} from "./Login";

export const Land = () => {
    const data = useSelector((store) => (store.reducer.isLoggedIn));

    return (
        <>
        {data?<UserDetails/>:<Login/>}
        </>
    )
}