import LoginView from "../pages/auth/view/login-view";
import CrAccountView from "../pages/CrAcount/view/CrAccount-view";




export const routes= {
    LoginPage : {
        path:"/",
        Component:LoginView
    },
    CreateAccountPage: {
        path:"/signIn",
        Component:CrAccountView
    }
}