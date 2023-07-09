import { useRef } from "react"
import { useSearchParams } from "react-router-dom"

export const SearchBar = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const ref = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = ref.current.value

        //mirar los ultimos 15  minutos del after.
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={ref}
                type="text"
                className="border-2 border-gray-300 rounded-lg w-full p-2"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Search
            </button>
        </form>
    )
}
