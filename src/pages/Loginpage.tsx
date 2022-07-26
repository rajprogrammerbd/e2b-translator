import React, { useState } from 'react';
import * as yup from 'yup';
import Header from '../components/Header';

interface States {
    email: string;
    password: string;
    error: string;
}

let schema = yup.object().shape({
    email: yup.string().email(),
    password: yup.string().min(6).max(16),
});

function LoginPage() {
    const [state, setState] = useState<States>({ email: '', password: '', error: '' });

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
    return (
        <>
          <Header />
          <div className="md:container mx-auto prose h-screen bg-slate-50 flex justify-center items-center">
            <form className="w-3/5">
                <fieldset className="border px-5 py-8 text-sm">
                    <legend className="font-bold italic">Login Page:</legend>

                    <label className="block">
                        <span className="block text-sm font-medium text-slate-700 mb-2">Email:</span>
                        <input type="text" value={state.email} onChange={valueChanges} name="email" className="w-full py-2 px-3 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" placeholder="Enter your email" />
                    </label>

                    <label className="block mt-6 mb-3">
                        <span className="block text-sm font-medium text-slate-700 mb-2">Password:</span>
                        <input type="password" value={state.password} onChange={valueChanges} name="password" className="w-full py-2 px-3 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" placeholder="Enter your password" />
                    </label>

                    {state.error !== '' ? <small className="block text-red-600">{state.error}</small> : null}
                    <input type="submit" disabled={(state.email === '' || state.password === '') ? true : false} className="disabled:opacity-50 bg-sky-500 text-white p-2 rounded text-xs cursor-pointer" value="LOGIN" />
                </fieldset>
            </form>
          </div>
        </>
    );
}

export default LoginPage;
