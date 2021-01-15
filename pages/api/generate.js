import { connectToDatabase } from '../../util/mongodb'
import { generate_base_schema } from '../../util/generator'

const { MONGODB_COLLECTION } = process.env

export default async (req, res) => {
  // check if method is POST
  if (req.method == 'POST') {
    // get the url from req.body
    const url = req.body['url']

    // check if url is valid or != null / ""
    if (!url || url === '') {
      // send an error
      res
        .status(400)
        .end('Bad Request. Please check your request and try again.')
    }
    // if valid, continue
    else {
      // handle post method
      const { db } = await connectToDatabase()

      const link = await db
        .collection(MONGODB_COLLECTION)
        .findOne({ request_url: url })
        .then(async (result) => {
          // if the request_url is found in the db
          if (result) {
            // return it
            return result
          }

          // generate a new shorten data
          // if the request_url is not found in the db, continue
          // get schema data from function
          const NewGrueLink = await generate_base_schema(url)

          // insert to the database
          await db
            .collection(MONGODB_COLLECTION)
            .insertOne(NewGrueLink)
            .then() // do nothing after stored
            .catch((e) => {
              // if there was a problem
              // log error
              console.error(e)
              // return nothing
              return null
            })

          // return the new shorten data
          return NewGrueLink
        })

      // if link == null
      if (!link) {
        // send 500 | internal server error
        // if there was a problem above
        res
          .status(500)
          .end(
            'There seems to be a problem in our side. Please try again later...',
          )
      } else {
        // set header cache
        res.setHeader('Cache-Control', 's-maxage=31536000')

        // send back the link generated
        res.status(200).json(link)
      }
    }
  }
  // any other methods are not allowed
  else {
    // return 405 | method not allowed
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
