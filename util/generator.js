import { nanoid } from 'nanoid'
import { connectToDatabase } from './mongodb'
import moment from 'moment'

const { DOMAIN_URL, MONGODB_COLLECTION } = process.env

export async function generate_base_schema(request_url) {
  // get shortlink id from function
  const short = await getShortId()

  // return the url base schema
  return {
    request_url: request_url,
    redirect: request_url,
    shortlink: {
      short: short,
      long: DOMAIN_URL + short,
    },
    created_date: moment().utc().format(),
    last_visit_date: moment().utc().format(),
  }
}

async function getShortId() {
  // generate random string id
  const short = nanoid(5)

  const { db } = await connectToDatabase()

  // check if the shortid exists
  // even though it is impossible to have similar ones
  // it is for surety
  const check = await db
    .collection(MONGODB_COLLECTION)
    .findOne({ 'shortlink.short': short })
    .then((res) => {
      // true if there is,
      if (res) {
        return true
      }

      // else, return false
      return false
    })

  // re-run
  if (check) {
    return getShortId()
  }

  return short
}
