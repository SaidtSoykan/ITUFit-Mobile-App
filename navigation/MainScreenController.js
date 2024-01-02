import React,{Fragment, useState} from "react";
import BottomNavigator from "./BottomNavigator";
import LoginScreen from "./screens/LoginScreen";

const MainScreenController = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const authorized = () => {
        setIsLoggedIn(true);
    };
    return (
        <Fragment>
            {(function(){
            if(isLoggedIn){
                return <BottomNavigator />
            }else{
                return <LoginScreen authorize={authorized} />
            }
        })()}
        </Fragment>
    )
}

export default MainScreenController;