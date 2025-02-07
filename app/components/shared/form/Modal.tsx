import { Dialog } from "@headlessui/react"

import React, { Dispatch, SetStateAction } from "react"

interface Props{
    children: React.ReactElement,
    show?:boolean,
    setShow:(show:boolean)=> void
}
const Modal = ({children , show=true , setShow} : Props) => {

    return(
        <>
            <Dialog
             as="div"
             className="fixed inset-0 z-10 overflow-y-auto"
              open={show} onClose={setShow}>
                <div onClick={()=> setShow(false)} className="overlayModal fixed inset-0 bg-black bg-opacity-[.4]"></div>
                {/* <span className="inline-block h-screen align-middle">&#8203;</span> */}

                <div className={`flex justify-center items-center border-blue-600 w-full h-screen`}>
                    {children}
                </div>

            </Dialog>
        </>
    )
}

export default Modal
