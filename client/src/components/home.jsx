import { useState } from 'react'
import Tabs from './ui/tabs'
import Reading from './reading'
import Listening from './listening'

const Home = () => {
  const [activeTab, setActiveTab] = useState('reading')

  return (
    <div>
      <Tabs />
      <div className=" flex justify-start flex-wrap w-full border-b-2 border-gray-200 text-sm cursor-pointer gap-6 text-gray-400 font-light  px-3">
        <div
          onClick={() => setActiveTab('reading')}
          className={`pb-2 ${
            activeTab === 'reading'
              ? 'text-black font-medium border-b-2 border-black'
              : 'text-gray-400'
          }`}
        >
          Reading
        </div>

        <div
          onClick={() => setActiveTab('listening')}
          className={`pb-2 ${
            activeTab === 'listening'
              ? 'text-black font-medium border-b-2 border-black'
              : 'text-gray-400'
          }`}
        >
          Listening
        </div>
      </div>

      <div className="p-4">
        {activeTab === 'reading' && <Reading />}
        {activeTab === 'listening' && <Listening />}
      </div>
    </div>
  )
}

export default Home
