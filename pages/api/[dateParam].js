export default function handler(req, res) {
  let { dateParam } = req.query;
  const val = Number.parseInt(dateParam);
  const isTimestamp = !isNaN(val) && /\d{5,}/.test(dateParam);
  const isValidDate = new Date(dateParam).getTime() > 0;
  if (!isTimestamp && !isValidDate) {
    res.status(422).json({ error: "Invalid date" });
  } else {
    const date = isTimestamp ? new Date(val) : new Date(dateParam);
    console.log(date, isTimestamp);
    const data = {
      unix: date.getTime(),
      utc: date.toUTCString(),
    };
    res.status(422).json(data);
  }
}
