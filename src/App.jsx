
import './App.css'

function App() {

  return (
    <>
      {/* Piano wrapper */}
      <div className='flex items-center justify-center min-h-screen bg-gray-900'>
        <div className='flex bg-black rounded-lg p-4 gap-1'>

          {/* White Keys */}
          {['C', 'D', 'E', 'F', 'G', 'A', 'B'].map((note, index) => (
            <div
              key={index}
              className='relative w-16 h-64 bg-white rounded-b-md border border-gray-300'
            >
              <span className='absolute bottom-2 left-2 text-sm text-gray-800 font-semibold'>
                {note}
              </span>
            </div>
          ))}

          {/* Black Keys (positioned manually for simplicity) */}
          <div className='absolute flex justify-between w-[448px] px-[30px] mt-2'>
            {[0, 1, 3, 4, 5].map((index) => (
              <div
                key={index}
                className='w-8 h-40 bg-black rounded-b-md shadow-lg z-10'
              ></div>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}

export default App
