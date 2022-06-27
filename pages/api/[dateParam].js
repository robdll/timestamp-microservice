export default function handler(req, res) {
  let { dateParam } = req.query;
  const val = Number.parseInt(dateParam);
  const isTimestamp = !isNaN(val) && val >= -8.64e12 && val <= +8.64e12;
  const isValidDate = new Date(dateParam).getTime() > 0;
  console.log(isTimestamp, isValidDate);
  if (!isTimestamp && !isValidDate) {
    res.status(422).json({ message: "Invalid date" });
  } else {
    const date = isTimestamp ? new Date(val) : new Date(dateParam);
    console.log(dateParam);
    const data = {
      unix: date.getTime(),
      utc: date.toUTCString(),
    };
    res.status(422).json(data);
  }
}
