import {useRouter} from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {format} from 'date-fns'

const Search = () => {
  const router = useRouter()
  const {location, startDate, endDate, noOfGuests} = router.query
  // console.log(router.query)
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
  const duration = `${formattedStartDate} - ${formattedEndDate}`
  const placeholder = `${location} | ${duration} | ${noOfGuests} guests`

  return (
    <div>
      <Header placeholder={placeholder} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {duration} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-3 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation flexibility</p>
            <p className="button">Type of Places</p>
            <p className="button">Price</p>
            <p className="button">Rooms &amp; Beds</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search
