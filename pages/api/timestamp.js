export default function handler(req, res) {
  const date = new Date();
  res.json({ unix: date.valueOf(), utc: date.toUTCString() });
}
