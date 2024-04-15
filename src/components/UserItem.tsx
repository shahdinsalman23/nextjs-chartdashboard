'use-client';


export default function UserItem(){
    return (
        <div className="flex items-center justify-between w-full gap-2 border rounded-[8px] p-2">
            <div className="avatar rounded-full min-h-10 min-w-10 h-12 w-12 bg-emerald-500 text-white font-[700] flex items-center justify-center">
                SS
            </div>
           <div className="grow"> 
                <p className="text-[16px] font-bold">Shahdin Salman</p>
                <p className="text-[12px] text-neutral-500">shahdinsalman@gmail.com</p>
           </div>
        </div>
    )
}