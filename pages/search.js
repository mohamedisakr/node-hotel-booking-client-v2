import {useRouter} from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {format} from 'date-fns'
import InfoCard from '../components/InfoCard'
import {searchData} from '../fixtures/search-data'

const Search = ({searchResults}) => {
  const router = useRouter()
  const {location, startDate, endDate, noOfGuests} = router.query

  const formattedStartDate = format(new Date(startDate), 'dd-MM-yyyy') // 'dd MMMM yy'
  const formattedEndDate = format(new Date(endDate), 'dd-MM-yyyy') //  'dd MMMM yy'
  const duration = `${formattedStartDate} - ${formattedEndDate}`
  const placeholder = `${location} | ${duration} | ${noOfGuests} guests`

  console.log(searchResults)

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

          <div className="flex flex-col">
            {searchResults.map(
              ({
                _id,
                title,
                content,
                location,
                image,
                price,
                from,
                to,
                bed,
              }) => (
                <InfoCard
                  key={_id}
                  title={title}
                  content={content}
                  location={location}
                  image={image}
                  price={price}
                  from={from}
                  to={to}
                  bed={bed}
                />
              ),
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  let {query} = context

  const baseUrl = `http://localhost:5000/api/v1/search-listings`
  // console.log(`query : ${JSON.stringify(query)}`)

  const {location, startDate, endDate, noOfGuests} = query
  const formattedStartDate = format(new Date(startDate), 'yyyy-MM-dd') // 'dd-MM-yyyy' //'dd mm yyyy'
  const formattedEndDate = format(new Date(endDate), 'yyyy-MM-dd') // yyyy-MM-dd 'dd-MM-yyyy' //'dd mm yyyyy'

  const params = {
    location,
    startDate: formattedStartDate,
    endDate: formattedEndDate,
    bed: noOfGuests,
  }

  let queryParams = Object.keys(JSON.parse(JSON.stringify(params)))
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    // .map((k) => k + '=' + params[k])
    .join('&')

  // const url = `${baseUrl}?${queryParams}`

  // const res = await fetch(url, {method: 'POST'})
  // const searchResults = await res.json()

  // return {props: {searchResults}}
  return {props: {searchResults: searchData}}
}

// const url = `http://localhost:5000/api/v1/search-listings?${params}`
// const url = `http://localhost:5000/api/v1/search-listings?${
//   (location, startDate, noOfGuests)
// }`

// ------------------------------------------

// export async function getServerSideProps(context) {
//   let {params, query} = context
//   // console.log(`whole context : ${JSON.stringify(context)}`)
//   console.log(`query : ${JSON.stringify(query)}`)
//   console.log(`params : ${JSON.stringify(query)}`)

//   // const url = `http://localhost:5000/api/v1/search-listings?${query}`
//   const url = `http://localhost:5000/api/v1/search-listings?${params}`

//   const res = await fetch(url)
//   const searchResults = await res.json()

//   // Pass data to the page via props
//   return {props: {searchResults}}
// }

// ------------------------------------------

// let params =  {location, startDate, noOfGuests}
// Object.keys(params)
//   .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
//   .join('&')
