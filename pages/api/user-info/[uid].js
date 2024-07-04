export default function handler(req, res) {
  const { uid } = req.query;
  return res.status(200).json({ name: `Taekwan Kim ${uid}` });
}
