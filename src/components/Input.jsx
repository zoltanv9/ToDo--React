import {forwardRef} from "react";

const Input = forwardRef(function ({defaultValue, id, label, isTextArea, ...props}, ref) {
    const classes =
        "block w-full px-2 py-2 text-lg bg-stone-200 border-b-2 border-stone-400 focus:outline-none focus:bg-stone-300 focus:border-stone-700"

    return (
        <div className="space-y-1">
            <label htmlFor={id} className="uppercase block text-lg font-bold text-stone-600">
                {label}
            </label>
            {
                isTextArea ? (
                    <textarea
                        ref={ref}
                        id={id}
                        name={id}
                        defaultValue={defaultValue}
                        className={classes}
                        {...props}
                    />
                ) : (
                    <input
                        ref={ref}
                        id={id}
                        name={id}
                        type="text"
                        defaultValue={defaultValue}
                        className={classes}
                        {...props}
                    />
                )
            }
        </div>
    )
})

export default Input;