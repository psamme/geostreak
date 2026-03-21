const { countVisitors, supabaseConfigured } = require("./_lib/supabase");

const ADMIN_SECRET = process.env.GEOSTREAK_ADMIN_SECRET || "";

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!ADMIN_SECRET || req.headers["x-admin-secret"] !== ADMIN_SECRET) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  if (!supabaseConfigured()) {
    res.status(500).json({ error: "Supabase visitor tracking is not configured" });
    return;
  }

  try {
    const totalVisitors = await countVisitors();
    res.status(200).json({ totalVisitors });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not load visitor count" });
  }
};
