import React, { FormEventHandler, useRef } from 'react';
import './login-form.scss';

interface IProps {
    handleClick: (email: string, password: string) => Promise<void>;
}

const LoginForm = (props: IProps) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const loginAction: FormEventHandler = async (e) => {
        e.preventDefault();

        const email = emailRef.current?.value || '';
        const password = passwordRef.current?.value || '';

        await props.handleClick(email, password);
    }

    return (
        <form className="login-form" onSubmit={loginAction}>
            <fieldset>
                <div>
                    <label>
                        Email
                        <input type="text" ref={emailRef} />
                    </label>
                </div>
                <div>
                    <input type="password" ref={passwordRef} />
                </div>
            </fieldset>
            <div className="bottom-row">
                <div className="button-holder">
                    <button type='submit'>Login</button>
                </div>
            </div>
        </form>
    );
}

export { LoginForm };
