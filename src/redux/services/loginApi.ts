import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
        credentials: 'include'
    }),
    endpoints: (build) => ({
        logoutRequest: build.mutation<LogoutRes, void>({
            query: () => ({
                url: 'auth/logout',
                method: 'POST'
            }),
        }),
        loginRequest: build.mutation<ResType, ArgType>({
            query: (body: ArgType) => ({
                url: `auth/login`,
                method: 'POST',
                body,
            }),
        })
    })
});

export const { useLogoutRequestMutation, useLoginRequestMutation } = loginApi;