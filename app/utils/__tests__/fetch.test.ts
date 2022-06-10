// import 'whatwg-fetch';
// import { setupServer } from "msw/node"
// import { rest } from "msw"
import { fetchExampleTest } from '../../utils/fetchExample'
//
// const handlers = [
//   rest.get(`https://httpbin.org/get`, (req, res, ctx) => {
//
//     return res(ctx.status(200), ctx.json({
//       test: 'worked'
//     }))
//   })
//
// ]
//
// const server = setupServer(
//   ...handlers
// )
//
// beforeAll(() => {
//   server.listen()
// })
//
// afterAll((done) => {
//   server.close()
//   done();
// })
//
// afterEach(() => {
//   server.resetHandlers()
// })


test('MSW test with Remix 1.5.1', async () => {
  const response = await fetchExampleTest()
  // console.log('response', response)
  expect(true).toBe('')
})
