import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from 'js-cookie';

interface ResType {
    email: string;
    name: string;
    success: boolean;
}

interface ArgType {
    email?: string;
    password?: string;
    data?: {
        message?: string;
    }
}

interface LogoutRes {
    message: string;
}

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_API_VARIABLE,
        prepareHeaders: (headers) => {
            const cookieValue = Cookies.get('LOGIN_ACCESS_COOKIE');
            console.log('cookies value ', cookieValue);
            if (cookieValue !== undefined) {
                headers.set('Authorization', `Bearer ${cookieValue}`);
            }
            return headers;
        },
    }),
    endpoints: (build) => ({
        logoutRequest: build.mutation<LogoutRes, void>({
            query: () => ({
                url: 'auth/logout',
                method: 'POST',
                credentials: 'include',
            }),
        }),
        loginRequest: build.mutation<ResType, ArgType>({
            query: (body: ArgType) => ({
                url: `auth/login`,
                method: 'POST',
                body,
                credentials: 'include',
            }),
        })
    })
});

export const { useLogoutRequestMutation, useLoginRequestMutation } = loginApi;