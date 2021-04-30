import * as React from 'react';
import { LoginForm } from './_login-form/login-form';
import { RegistrationForm } from './_registraton-form/registration-form';
import { AuthManager } from '../../infrastructure/auth-manager/auth-manager';
import './restrict-unauthorized-access.scss';

const RestrictUnauthorizedAccess = (props: { children: JSX.Element }) => {
    const authManager = new AuthManager();
    const currentToken = authManager.getAuthToken();

    if (!currentToken) {
        return <AuthorizationForm
            authManager={authManager}
        />
    }

    return props.children;
};

const AuthorizationForm = (props: { authManager: AuthManager }) => {
    const [isRegistration, setIsRegistration] = React.useState(false);

    const loginAction = async (email: string, password: string) => {
        await props.authManager.login(email, password)
    }

    const registrationAction = async (email: string, password: string, password2: string) => {
        await props.authManager.register(email, password, password2);
    }

    return (
        <div className="restrict-unauthorized-access">
            <label>
                {isRegistration
                    ? 'I want to login'
                    : 'Sign in'
                }
            </label>
            <div className="form-holder">
                {isRegistration
                    ? <RegistrationForm handleClick={registrationAction} />
                    : <LoginForm handleClick={loginAction} />
                }
            </div>
        </div>
    )
}

export { RestrictUnauthorizedAccess };
