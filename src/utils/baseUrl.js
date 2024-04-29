const baseUrl = process.env.NODE_ENV === 'development' ? 'https://api-sandbox.beyounger.com' : 'https://api.beyounger.com'
const baseAdminUrl = process.env.NODE_ENV === 'development' ? 'https://admin-sandbox.beyounger.com' : 'https://admin.beyounger.com'

export { baseUrl, baseAdminUrl }
