// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios'


export default async function handler(
  req,res
) {
  let d = await axios.get(`http://84.32.4.173/api/stats`)
  res.status(200).json(d.data)
}
