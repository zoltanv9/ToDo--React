export default function Input({data, id, label, isTextArea, handleOnChange, ...props}) {
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
                        id={id}
                        name={id}
                        placeholder={`Enter ${id}`}
                        value={data}
                        onChange={(event) => handleOnChange(event, id)}
                        className={classes}
                        {...props}
                    />
                ) : (
                    <input
                        id={id}
                        name={id}
                        type="text"
                        placeholder={`Enter ${id}`}
                        value={data}
                        onChange={(event) => handleOnChange(event, id)}
                        className={classes}
                        {...props}
                    />
                )
            }

        </div>
    )
}