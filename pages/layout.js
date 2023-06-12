
export default function Layout({ children }) {

    return (
        <div className="">
            {/* header */}
            <header className="bg-gray-600 py-2">
                <center className="text-white">testing</center>
            </header>

            {children}

            {/* footer */}
            <footer className="bg-gray-600 py-2">
                <center className="text-white">footer</center>
            </footer>
        </div>
    )
}