'use client'
import React, { useState } from "react";
import { Card, CardHeader, CardBody, Input, Button, Link, Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";


export default function Home () {
  const [ pwd, setPwd ] = useState("");
  const [ auth, setAuth ] = useState("");
  const { data: session, status } = useSession();
  const route = useRouter()

  const fetchUser = async (auth, pwd) => {
    await signIn('credentials', {
      auth,
      pwd,
      callbackUrl: '/dashboard'
    });
    if (!!session.user) () => route.push('/dashboard')
  }
  if (status == 'authenticated') return () => route.push('/dashboard');
  else return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="py-4 w-[25vw]">
        <CardHeader className="pt-2 px-4 flex-col items-center gap-2">
          <h2 className="font-bold text-3xl">Login</h2>
          <small className="text-default-500">With GameGuardian Account</small>
        </CardHeader>
        <CardBody className="overflow-hidden flex flex-col gap-5">
          <Input
            fullWidth
            isRequired
            variant="underlined"
            type="email"
            placeholder="Display Name or Email "
            value={ auth }
            onValueChange={ setAuth }

          />
          <Input
            fullWidth
            isRequired
            variant="underlined"
            type="password"
            placeholder="Password "
            value={ pwd }
            onValueChange={ setPwd }

          />
          <Button type="submit" color="secondary" variant="ghost" onClick={ () => fetchUser(auth, pwd) }>
            { status == 'loading' ? <Spinner /> : 'Login' }
          </Button>
        </CardBody>

        <CardBody className="flex justify-center align-center" >
          <div className="flex-col justify-center align-center gap-2">
            <div className="flex justify-center align-center">
              <p className="text-md ">Script</p>
              <p className="font-bold text-md">Guardian</p>
            </div>
            <div className="flex justify-center align-center">
              <p className="text-tiny uppercase font-bold">Made by <Link size="sm" underline="hover" isExternal href='https://gameguardian.net/forum/profile/1258371-xekex/' className="text-default-500 text-tiny">XEKEX</Link></p>
            </div>

          </div>
        </CardBody>

      </Card>
    </div>)
}
