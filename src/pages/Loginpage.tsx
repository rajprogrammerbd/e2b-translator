import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import LoadingIcons from 'react-loading-icons';
import { useLoginRequestMutation } from '../redux/services/loginApi';
import { loginSuccess, loginFailed, resetLogin } from '../redux/slice/login';
import Header from '../components/Header';
import { useDispatch } from 'react-redux';

interface CustomError {
    data: {
        message: string;
    }
}

interface CustomErrorString {
    data: string;
}

interface States {
    email: string;
    password: string;
    error: string;
    loading: boolean;
}

let schema = yup.object().shape({
    email: yup.string().email(),
    password: yup.string().min(6).max(16),
});

function LoginPage() {
    const dispatch = useDispatch();
    const [state, setState] = useState<States>({ email: '', password: '', error: '', loading: true });
    const [loginRequest, { data, error, isError, isLoading }] = useLoginRequestMutation();

    useEffect(() => {
        if (window.localStorage.getItem('persist:roots') !== null) {
            dispatch(resetLogin({}));
        }
    }, [])

    useEffect(() => {
        if (isError) {
            dispatch(loginFailed());
        }
    }, [isError, error]);

    useEffect(() => {
        if (data !== undefined) {
            console.log('render this line');
            dispatch(loginSuccess({ ...data }));
        }
    }, [data]);

    const valueChanges = async (e: any) => {
        const { value } = e.target;
    
        if (e.target.name === "email") {
            const isVaildate = await schema.isValid({ email: value.trim() });
            if (isVaildate) {
                setState({ ...state, email: value.trim(), error: (state.error.includes('password')) ? 'Password must be 8 characters long.' : '' });
            } else {
                setState({ ...state, email: value.trim(), error: (state.error === 'Password must be 8 characters long.') ? 'Email and password must be vaildate' : 'Required valid email' });
            }

            return;
        } else {
            const isVaildate = await schema.isValid({ password: value.trim() });
            if (isVaildate) {
                setState({ ...state, password: value.trim(), error: (state.error.includes('email')) ? 'Required valid email' : '' });
            } else {
                setState({ ...state, password: value.trim(), error: (state.error === 'Required valid email') ? "Email and password must be vaildate" : 'Password must be 8 characters long.' });
            }
        }
    }

    const onSubmitted = (e: any) => {
        e.preventDefault();
        if ( state.email !== '' && state.password !== '' ) {
            loginRequest({ email: state.email, password: state.password });
        }
    }

    return (
        <>
          <Header />
          <div className="md:container mx-auto prose h-screen bg-slate-50 flex justify-center items-center">
            <form className="w-3/5">
                <fieldset className="border px-5 py-8 text-sm">
                    <legend className="font-bold italic">Login Page:</legend>

                    <label className="block">
                        <span className="block text-sm font-medium text-slate-700 mb-2">Email:</span>
                        <input type="text" value={state.email} data-testid="emailValueChanges" onChange={valueChanges} name="email" className="w-full py-2 px-3 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" placeholder="Enter your email" />
                    </label>

                    <label className="block mt-6 mb-3">
                        <span className="block text-sm font-medium text-slate-700 mb-2">Password:</span>
                        <input type="password" value={state.password} data-testid="passwordValueChanges" onChange={valueChanges} name="password" className="w-full py-2 px-3 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" placeholder="Enter your password" />
                    </label>

                    {state.error !== '' ? <small className="block text-red-600">{state.error}</small> : null}
                    {isError ? <small className="block text-red-600">{(typeof (error as CustomErrorString)?.data === 'string') ? (error as CustomErrorString)?.data : (error as CustomError).data?.message}</small> : null}
                    <div className="flex items-center">
                      <input type="submit" onClick={onSubmitted} data-testid="login-submitted" disabled={(state.email === '' || state.password === '') ? true : false} className=" float-left disabled:opacity-50 bg-sky-500 text-white p-2 rounded text-xs cursor-pointer" value="LOGIN" />
                      {isLoading ? <LoadingIcons.Puff stroke="#0ea5e9" className="" height="20px"  /> : null}
                    </div>
                </fieldset>
            </form>
          </div>
        </>
    );
}

export default LoginPage;
