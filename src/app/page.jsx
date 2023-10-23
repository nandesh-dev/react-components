import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid grid-rows-[auto_1fr] h-screen flex-col bg-gray-100 p-2 gap-2">
      <header className='flex items-center bg-white h-16 w-full px-6 rounded'>
        <h1 className='font-semibold text-xl'>React Component</h1>
      </header>
      <section className='grid grid-cols-[30rem_1fr] h-[calc(100vh-6rem)]'>
        <div className='bg-white h-full rounded'>
          <div className='grid grid-col-1 p-4 max-h-[calc(100vh-6rem)] gap-2 overflow-y-auto'>
            <h2 className='font-medium'>Name</h2>
            <div className='w-full h-60 bg-gray-50 rounded'></div>
            <h2 className='font-medium'>States</h2>
            <div className='grid grid-cols-2 gap-y-2 w-full rounded p-3 outline outline-2 outline-gray-50'>
              <p>Status:</p>
              <p>on</p>
              <p>Dissabled:</p>
              <p>true</p>
            </div>
            <h2 className='font-medium'>Code</h2>
            <div className='w-full h-60 bg-gray-50 rounded'></div>
          </div>
        </div>
      </section>
    </main>
  )
}