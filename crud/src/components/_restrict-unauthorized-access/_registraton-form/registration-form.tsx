import React, { useRef } from 'react';
import './registration-form.scss';

interface IProps {
    handleClick: (email: string, password: string, password2: string) => Promise<void>;
}

const RegistrationForm = (props: IProps) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const password2Ref = useRef<HTMLInputElement>(null);

    const registerAction: React.FormEventHandler = async (e) => {
        e.preventDefault();
        const email = emailRef.current?.value || '';
        const password = passwordRef.current?.value || '';
        const password2 = password2Ref.current?.value || '';

        await props.handleClick(email, password, password2);
    }

    return (
        <form className="register-form" onSubmit={registerAction}>
            <fieldset>
                <div className="input-holder">
                    <input type="text" placeholder="Email" ref={emailRef} />
                </div>
                <div className="input-holder">
                    <input type="password" placeholder="Password" ref={passwordRef} />
                </div>
                <div className="input-holder">
                    <input type="password" placeholder="Repeat password" ref={password2Ref} />
                </div>
            </fieldset>
            <div className="bottom-row">
                <div className="button-holder">
                    <button type='submit'>Register</button>
                </div>
            </div>
        </form>
    );
}

export { RegistrationForm };
