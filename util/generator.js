import { nanoid } from 'nanoid'
import moment from 'moment'

const { DOMAIN_URL } = process.env

export function generate_base_schema(request_url) {
  // generate random string id
  const short = nanoid(5)

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
