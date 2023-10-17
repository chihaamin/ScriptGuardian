'use client'
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { useSession, signOut } from 'next-auth/react';

export const dynamic = 'force-dynamic'

const UserProfile = () => {
    const { data: session, status } = useSession();


    if (status == 'authenticated')
        return (
            <Dropdown placement="bottom-end">
                <DropdownTrigger className="flex">
                    <div className='flex justify-center items-center gap-1 w-auto cursor-pointer'>
                       <Avatar 
                       name={session.user.name}
                       src={session.user.image}
                            size="md"
                            radius="sm"
                        />
                        <div class="inline-flex flex-col items-start"><span class="text-small text-inherit text-violet-900">{ session.user.name }</span><span class="text-tiny text-foreground-400">{ session.user.title }</span></div>
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