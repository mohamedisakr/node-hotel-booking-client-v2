import React from 'react'

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 max-w-7xl mx-auto px-32 py-14 bg-gray-100 text-gray-800">
      {/* max-w-7xl mx-auto px-8 sm:px-16 */}
      {/* first */}
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">About</h5>
        <p>How airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>airbnb Plus</p>
        <p>airbnb Luxe</p>
      </div>
      {/* second */}
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Community</h5>
        <p>Diversity & Belonging</p>
        <p>Accessibility</p>
        <p>airbnb Associates</p>
        <p>Frontpne Stays</p>
        <p>Guest Referrals</p>
      </div>

      {/* third */}
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Host</h5>
        <p>Host your home</p>
        <p>Host an Online Experience</p>
        <p>Host an Experience</p>
        <p>Responsible hosting</p>
        <p>Resource Centre</p>
      </div>

      {/* fourth */}
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Support</h5>
        <p>Our COVID-19 Response</p>
        <p>Help Centre</p>
        <p>Cancellation options</p>
        <p>Neighbourhood Support</p>
        <p>Trust & Safety</p>
      </div>
    </div>
  )
}

export default Footer
