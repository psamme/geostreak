const { applyRateLimit } = require("./_lib/security");
const { supabaseConfigured, upsertVisitor } = require("./_lib/supabase");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!supabaseConfigured()) {
    res.status(200).json({ tracked: false, reason: "not_configured" });
    return;
  }

  if (!applyRateLimit(req, res, "track-visitor", 30, 60_000)) {
    return;
  }

  const { visitorId, path } = req.body || {};
  if (!visitorId || typeof visitorId !== "string" || visitorId.length < 12) {
    res.status(400).json({ error: "Invalid visitor id" });
    return;
  }

  const userAgent = String(req.headers["user-agent"] || "").slice(0, 512);
  const now = new Date().toISOString();

  try {
    const result = await upsertVisitor({
      visitor_id: visitorId,
      first_seen: now,
      last_seen: now,
      first_path: typeof path === "string" ? path.slice(0, 256) : "/",
      last_path: typeof path === "string" ? path.slice(0, 256) : "/",
      user_agent: userAgent
    });

    res.status(200).json({
      tracked: true,
      created: result.created
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not track visitor" });
  }
};
