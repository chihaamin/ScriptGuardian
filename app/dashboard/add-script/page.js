'use client'
import { useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import LuaEditor from '@/components/luaEditor';
import CSwitch from '@/components/customSwitch';
import Link from 'next/link';
const page = () => {
    const [ luaCode, setLuaCode ] = useState('\n\n--Paste your Lua script here');

    const handleCodeChange = (newCode) => {
        setLuaCode(newCode);
    };
    return (

        <div className='flex justify-center items-center w-full h-full p-4'>
            <div className="block w-1/2 h-[75vh] gap-4">
                <h4 className='font-bold text-2xl pb-2'>Setup</h4>
                <div className='flex flex-col gap-4'>
                    <Input className='max-w-md' type="text" size='lg' variant="underlined" placeholder="Script Title" required />
                    <CSwitch title='Enable Authentication' desc='Only GameGuardian members can access this script' on badge={ 'Beta' } />
                    <CSwitch title='Enable Force React' desc='Force member to react in the forum befor using it' disabled badge={ 'Coming soon' } />
                    <CSwitch title='Enable Force Comment' desc='Force member to Comment in the forum befor using it' disabled badge={ 'Coming soon' } />
                    <CSwitch title='Enable Track Users' desc='Show who use your script real-time' disabled badge={ 'Coming soon' } />
                    <div className='flex justify-between gap-2 max-w-md'>
                        <Button as={ Link } href='/dashboard/' color='danger' variant='flat'>Cancel</Button>
                        <Button color='secondary' variant='flat'>Next</Button>
                    </div>

                </div>
            </div>
            <div className="w-1/2 h-[70vh] justify-center items-center gap-2">
                <h4 className='font-bold text-xl'>Lua Code:</h4>
                <LuaEditor initialValue={ luaCode } onChange={ handleCodeChange } />
                <div className='flex overflow-hidden justify-center align-baseline pt-2'>
                </div>

            </div>

        </div>
    )
}

export default page