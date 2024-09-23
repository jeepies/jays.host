import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Outlet, redirect } from "@remix-run/react";
import { getSession } from "~/services/session.server";
import bcrypt from "bcryptjs";
import { Button } from "flowbite-react";

export const meta: MetaFunction = () => {
  return [
    { title: "jays.host" },
    { name: "description", content: "Invite-only Image Hosting" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  if (session.has("userID")) return redirect("/dashboard");

  return null;
}

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Button href="/login">Login</Button> <Button href="/register">Register</Button>
    </div>
  );
}
