const request = require('supertest')
const app = require('../server')

describe('Get Endpoints', () => {
  it('should create a new get', async () => {
    const res = await request(app).get('/api/v1/order/12345')
    expect(res.statusCode).toEqual(200)
  })
})