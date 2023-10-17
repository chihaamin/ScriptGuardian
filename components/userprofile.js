'use client'
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from "next/navigation";
const UserProfile = () => {
    const { data: session, status } = useSession();
    const route = useRouter()
    if (status == 'authenticated') () => route.push('/');
    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger className="flex">
                <div className='flex justify-center items-center gap-1 w-auto cursor-pointer'> 
                <button class="relative justify-center items-center box-border overflow-hidden align-middle outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 w-10 h-10 text-tiny bg-default text-default-foreground rounded-full z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased transition-transform flex" type="button">
                    <img src={ session.user.img } class="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100" alt={ session.user.name } />
                    </button>
                    <div className="flex-row ">
                        <p className="font-bold text-sm text-violet-800">
                            { session.user.name }
                        </p>
                        <p className="text-tiny text-stone-600">
                            { session.user.title }
                        </p>
                    </div>
                    </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" color='secondary' variant="shadow" disabledKeys={ [ "settings", "analytics", "system", "membership" ] }>
                <DropdownItem key="membership" >Membership</DropdownItem>
                <DropdownItem key="settings">My Scripts</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={ signOut }>
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default UserProfile