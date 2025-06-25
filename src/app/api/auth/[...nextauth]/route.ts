import NextAuth from "next-auth";
import { authOptions } from "./options";

const { handlers } = NextAuth(authOptions);

export const GET = handlers.GET;
export const POST = handlers.POST;