const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby1sdmxjGSN9NUFZDZSaoK2jpFZLWwEUKDJHJkpKU1gCbO8-sp1Yh-3b6-Ca_jP5XANNQ/exec";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }
  try {
    const body = typeof req.body === "string" ? req.body : JSON.stringify(req.body);
    const upstream = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body,
      redirect: "follow",
    });
    const text = await upstream.text();
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(text);
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}