/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withTM = require('next-transpile-modules')([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
])

module.exports = withTM({
  // any other next.js settings here
  nextConfig
})

// module.exports = nextConfig

