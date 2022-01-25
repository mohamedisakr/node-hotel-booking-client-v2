import React, {useState} from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import {DateRangePicker} from 'react-date-range'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

const Header = () => {
  const [location, setLocation] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1)
  const router = useRouter()

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }

  const handleSelect = (ranges) => {
    console.log(ranges)
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const resetLocation = (event) => setLocation('')

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left - logo */}
      <div
        onClick={(event) => router.push('/')}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          alt="airbnb"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle - search */}
      <div className="flex items-center md:border-2 rounded-full md:shadow-sm">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-500 placeholder-gray-400"
          type="text"
          name="search"
          id="search"
          placeholder="Start Your Search"
        />
        <SearchIcon className="hidden md:inline-flex md:mx-2 h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
      </div>

      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {location && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#fd5b61']}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              min={1}
              max={10}
              value={noOfGuests}
              onChange={(event) => setNoOfGuests(event.target.value)}
              className="w-12 pl-2 text-lg outline-none text-red-400"
              name="guests"
              id="guests"
            />
          </div>
          <div className="flex items-center space-x-3">
            <button onClick={resetLocation} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
