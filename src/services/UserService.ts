import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export interface User {
    id?: number;
    email: string;
    name: string;
    password: string;
}

export const UserAPI = createApi({
    reducerPath: "UserApi",
    baseQuery: fetchBaseQuery({baseUrl: process.env.BASE_URL}),
    endpoints: (build) => ({
        registerUser: build.mutation({
            query: (user: User) => ({
                url: "/api/user/register",
                method: "POST",
                body: user
            })
        })
    })
});