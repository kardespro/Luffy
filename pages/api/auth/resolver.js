import axios from 'axios'
export default async function handler(req,res){
  if(!req.query.code) return res.json({ status: 401, message: " Failed "})
  let dreq = await axios.get("https://discord.com/api/users/@me", {headers: {"Authorization": `Bearer ${req.query.code}`}}).catch(a => res.json({ status: 500, message: a}))
  res.json(dreq.data)
}