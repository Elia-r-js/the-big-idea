import LoginView from "../pages/auth/view/login-view";
import CrAcount from "../pages/CrAcount/CrAcount";




export const routes= {
    LoginPage : {
        path:"/",
        Component:LoginView
    },
    CreateAccountPage: {
        path:"/signIn",
        Component:CrAcount
    }
}