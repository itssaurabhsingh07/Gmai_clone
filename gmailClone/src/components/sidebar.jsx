import React from 'react'
import { LuPencil } from "react-icons/lu";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { MdOutlineDrafts } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";




const sidebarItems = [
    {
        icon: <LuPencil size={'24px'} />,
        text: "Indbox"
    },
    {
        icon: <IoMdStarOutline size={'24px'} />,
        text: "Staared"
    },
    {
        icon: <MdOutlineWatchLater size={'24px'} />,
        text: "Snoozed"
    },
    {
        icon: <MdOutlineDrafts size={'24px'} />,
        text: "Draft"
    },
    {
        icon: <TbSend2 size={'24px'} />,
        text: "Sent"
    },
    {
        icon: <MdOutlineKeyboardArrowDown size={'24px'} />,
        text: "More"
    }
]



const Sidebar = () => {
    return (
        <div className='w-[15%]'>
            <div className='p-3'>
                <button className='flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]'>
                    <LuPencil size={'24px'} />
                    Compose
                </button>
            </div>
            <div className='text-gray-500'>
                {
                    sidebarItems.map((item, index) => {
                        return (
                            <div className='flex items-center gap-4 pl-6 py-1 rounded-full hover:cursor-pointer hover:bg-gray-200 my-2'>
                                {item.icon}
                                <p> {item.text}</p>
                            </div>

                        )
                    })
                }


            </div>
        </div>
    )
}

export default Sidebar