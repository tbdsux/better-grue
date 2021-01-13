import { connectToDatabase } from '../../../util/mongodb'

const { MONGODB_COLLECTION } = process.env

export default async (req, res) => {
  const { db } = await connectToDatabase()

  const link = await db
    .collection(MONGODB_COLLECTION)
    .findOne({ 'shortlink.short': req.query.shortlink })
    .then((res) => {
      return res
    })
    .catch((e) => {
      // if there was a problem
      // log error
      console.error(e)
      // return nothing
      return null
    })

  // if link == null
  if (!link) {
    res.status(404).end('404 Not Found! The shortlink was not found.')
  } else {
    res.status(200).json(link)
  }
}
