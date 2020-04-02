const request = require('supertest')
const app = require('../server')

describe('Get Endpoints', () => {
    it('should create a new get', async () => {
        const res = await request(app).get('/api/v1/order/12345')
        expect(res.statusCode).toEqual(200)
    })
})

describe('createOrder', () => {
    it('should create a new order', async () => {
        var text = '{ "firstName":"name",' +
            '"lastName":"lastName",' +
            '"householdNum": "1",' +
            '"address":"f st",' +
            '"phoneNumber":"1234567890",' +
            '"items": [{"name":"eggs", "quantity": "1"}],' +
            '"zipcode":"1234",' +
            '"type":"REQUEST",' +
            '"additionalInfo":"1",' +
            '"time":"2"}'
        var obj = JSON.parse(text);
        const res = await request(app).post('/api/v1/order/').send(obj)
      // console.log(res)
        expect(res.status).toEqual(200)
    })
})