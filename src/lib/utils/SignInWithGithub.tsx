'use client';

import {signIn} from "next-auth/react";

export default function SignInWithGithub() {


    return (
        <button
            type="button"
            onClick={() => signIn("github")}
            className="py-[10px] px-4 max-w-full flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-400 focus:ring-offset-gray-200 font-medium text-[#3C4043] w-full transition ease-in duration-200 text-center text-sm  shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-3xl"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="mr-2"
                viewBox="0 0 1792 1792"
            >
                <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103z"/>
            </svg>
            <span className="mx-auto">Sign in with GitHub</span>
        </button>

    );
}