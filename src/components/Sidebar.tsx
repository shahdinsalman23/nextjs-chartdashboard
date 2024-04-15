'use client';
import { Bell, Cookie, Inbox, MessageSquare, PanelTop, Settings, User } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, } from "./ui/command";
import UserItem from "./UserItem";
import Link from "next/link";


  export default function Sidebar(){
     const menuList = [
        {
          group: "General",
          items: [
            {
                link: '/',
                icon: <User size={20} />,
                text: 'Profile',
            },
            {
                link: '/',
                icon: <Inbox size={20} />,
                text: 'Inbox',
            },
            {
                link: '/',
                icon: <PanelTop size={20} />,
                text: 'Billing',
            },
            {
                link: '/',
                icon: <Bell size={20} />,
                text: 'Notifications',
            }
          ]
        },
        {
            group: "Setting",
            items: [
              {
                  link: '/',
                  icon: <Settings size={20} />,
                  text: 'General Settings',
              },
              {
                  link: '/',
                  icon: <Cookie size={20} />,
                  text: 'Privacy',
              },
              {
                  link: '/',
                  icon: <MessageSquare size={20} />,
                  text: 'Logs',
              },
            ]
          }
     ]
    return (
        <>
        <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] p-4 min-h-screen">
            <div><UserItem/></div>
            <div className="grow">
            <Command style={{ overflow: 'visible'}}>
                <CommandList style={{ overflow: 'visible'}}>
                    {menuList.map((menu: any, key: number) => (
                    <CommandGroup key={key} heading={menu.group}>
                        {menu.items.map((option: any, optionKey: number) => <CommandItem className="flex gap-2 cursor-pointer" key={optionKey}>{option.icon}{option.text}</CommandItem>)}
                    </CommandGroup>))}
                </CommandList>
             </Command>
            </div>

            <div> 
                <Link href={`/team`} className="flex gap-2 items-center">
                    <Settings size={20} />
                    <span>Team settings</span>
                </Link>
                </div>
            </div>
        </>
    )
}
