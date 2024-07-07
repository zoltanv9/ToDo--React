import {forwardRef, useImperativeHandle, useRef} from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function ({children}, ref) {
    const dialogRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal()
            },
            close() {
                dialogRef.current.close()
            }
        }
    });

    return createPortal(
        <dialog ref={dialogRef} className="backdrop:bg-stone-900/80 p-4 rounded-md shadow-md w-[300px]">
            {children}
        </dialog>,
        document.getElementById('modal-root')
    )
})

export default Modal;