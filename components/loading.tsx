const Loading = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <div className='flex items-center justify-center '>
                    <div className='w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin'></div>
                </div>
            </main>
        </div>
    )
}
export default Loading
