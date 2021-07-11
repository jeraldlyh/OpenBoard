import React from "react"
import { ImArrowUpRight2, ImArrowDownLeft2 } from "react-icons/im"

function StatsCard(props: any) {
    return (
        <div className="border border-th-outline bg-th-background-secondary rounded-2xl px-10 pt-6 pb-3 shadow-th-shadow flex justify-between items-center">
            <div className="pr-3 text-center relative z-10">
                <div className="text-left text-sm uppercase text-th-text">{props.name}</div>
                <div className="flex items-center justify-between">
                    <div className="text-2xl text-th-text font-semibold my-2">{props.stats}</div>
                    {
                        props.change[0] === "-" ?
                        <div className="ml-5 text-xs text-red-500 flex flex-none">▼ {props.change.slice(1)}%</div>
                        :
                        <div className="ml-5 text-xs text-green-500 flex flex-none">▲ {props.change}%</div>
                    }
                </div>
            </div>
            {
                props.change[0] === "-" ?
                <div className="-mt-3 rounded-xl w-10 h-10 bg-redtrans flex flex-none justify-center items-center">
                    <ImArrowDownLeft2 className="w-5 h-5 text-red-500"/>
                </div>
                :
                <div className="-mt-3 rounded-xl w-10 h-10 bg-greentrans flex flex-none justify-center items-center">
                    <ImArrowUpRight2 className="w-5 h-5 text-green-500"/>
                </div>
            }
        </div>
    )
}

export default StatsCard