
export default function Layout({ children }) {

    return (
        <div className="">
            {/* header */}
            <header className="bg-gray-600 py-4 text-4xl font-semibold">
                <center className="text-white">Qualifying Test</center>
            </header>

            {children}


        </div>
    )
}