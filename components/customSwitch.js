'use client'
import React from 'react'
import { Badge, Switch, cn } from '@nextui-org/react'
const CSwitch = ({ title, desc, on, disabled, badge }) => {
    return (
        <Badge content={ badge ? <h2 className='font-bold text-md'>{ badge }</h2> : null } variant='faded' color={ disabled ? 'warning' : 'success' } placement='top-right' disableOutline shape='rectangle' size='lg' classNames={ {
            base: cn(
                "inline-flex flex-row-reverse w-full max-w-md",
                `justify-between ${disabled === true ? 'cursor-not-allowed' : 'cursor-pointer'} rounded-lg gap-2 border-small border-black/50 shadow-pink-500/30  `,
            ),


        } } >
            <Switch
                color="success"
                isSelected={ on | false }
                isDisabled={ disabled | false }
                classNames={ {
                    base: cn(
                        "inline-flex flex-row-reverse w-full h-full max-w-md bg-content2 hover:bg-content1 items-center ",
                        `justify-between ${disabled === true ? 'cursor-not-allowed' : 'cursor-pointer'} rounded-lg gap-2 p-4 border-none `,
                        "data-[selected=true]:bg-content1",
                    ),


                } }
            >
                <div className=" flex flex-col gap-1">

                    <div>
                        <p className="font-bold text-medium">{ title }</p>
                        <p className="text-tiny text-default-600">
                            { desc }
                        </p>
                    </div>

                </div>
            </Switch>
        </Badge>
    )
}

export default CSwitch

/*
classNames={ {
                base: cn(
                    "relative inline-flex flex-row-reverse w-full max-w-md bg-content2 hover:bg-content1 items-center ",
                    `justify-between ${disabled === true ? 'cursor-not-allowed' : 'cursor-pointer'} rounded-lg gap-2 p-4 border-none `,
                    "data-[selected=true]:bg-content1",
                ),
                wrapper: "p-0 h-4 overflow-visible",
                thumb: cn("w-6 h-6 border-2 shadow-lg",
                    "group-data-[hover=true]:border-primary",
                    //selected
                    "group-data-[selected=true]:ml-6 ",
                    // pressed
                    "group-data-[pressed=true]:w-7",
                    "group-data-[selected]:group-data-[pressed]:ml-4",
                ),
            } }
*/