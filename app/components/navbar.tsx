export default function Navbar(){


    return (
       <><main className="flex-grow bg-blue-100 p-8">
        <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
        <span className="text-blue-500">Ayusmart</span>
        <span className="text-green-500"> HealthCare</span></h1>
        <button className="text-blue-500 font-semibold py-2 px-4 rounded transition-shadow duration-200 hover:shadow-lg hover:shadow-blue-300">
            +Let&apos;s Connect 
            </button> 
                  
        </header>
        </main>
        
        </>
    );
}