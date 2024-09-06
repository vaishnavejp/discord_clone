"use client";

import { Plus } from "lucide-react";
import ActionTooltip from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

const NavigationAction = () => {

    const { onOpen, isOpen } = useModal();

    const handleClick = () => {
        onOpen("createServer");
    }

    return (
        <div>
            <ActionTooltip 
                label="Add a server"
                align="center"
                side="right"
            >
                <button className="group flex items-center" 
                    onClick={handleClick}
                >
                    <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all bg-background dark:bg-neutral-700 overflow-hidden items-center justify-center  group-hover:bg-emerald-500">
                        <Plus 
                            className="group-hover:text-white transition text-emerald-500"
                            size={25}
                        />
                    </div>
                </button>
            </ActionTooltip>
        </div>
    );
}
 
export default NavigationAction;