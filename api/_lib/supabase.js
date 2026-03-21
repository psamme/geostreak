const SUPABASE_URL = process.env.GEOSTREAK_SUPABASE_URL || "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.GEOSTREAK_SUPABASE_SERVICE_ROLE_KEY || "";
const VISITORS_TABLE = "geostreak_visitors";

function supabaseConfigured() {
  return Boolean(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY);
}

async function supabaseFetch(path, options = {}) {
  if (!supabaseConfigured()) {
    throw new Error("Supabase visitor tracking is not configured");
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Supabase request failed: ${response.status} ${text}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

async function findVisitor(visitorId) {
  const search = new URLSearchParams({
    select: "visitor_id,visit_count,first_seen",
    visitor_id: `eq.${visitorId}`,
    limit: "1"
  });

  const data = await supabaseFetch(`${VISITORS_TABLE}?${search.toString()}`, {
    method: "GET"
  });

  return Array.isArray(data) && data.length ? data[0] : null;
}

async function insertVisitor(record) {
  await supabaseFetch(VISITORS_TABLE, {
    method: "POST",
    headers: {
      Prefer: "return=minimal"
    },
    body: JSON.stringify(record)
  });
}

async function updateVisitor(visitorId, record) {
  const search = new URLSearchParams({
    visitor_id: `eq.${visitorId}`
  });

  await supabaseFetch(`${VISITORS_TABLE}?${search.toString()}`, {
    method: "PATCH",
    headers: {
      Prefer: "return=minimal"
    },
    body: JSON.stringify(record)
  });
}

async function upsertVisitor(visitor) {
  const existing = await findVisitor(visitor.visitor_id);
  if (!existing) {
    await insertVisitor({
      ...visitor,
      visit_count: 1
    });
    return { created: true };
  }

  await updateVisitor(visitor.visitor_id, {
    last_seen: visitor.last_seen,
    last_path: visitor.last_path,
    user_agent: visitor.user_agent,
    visit_count: Number(existing.visit_count || 0) + 1
  });

  return { created: false };
}

async function countVisitors() {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${VISITORS_TABLE}?select=visitor_id`, {
    method: "HEAD",
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      Prefer: "count=exact"
    }
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Supabase count failed: ${response.status} ${text}`);
  }

  return Number(response.headers.get("content-range")?.split("/")?.[1] || 0);
}

module.exports = {
  countVisitors,
  supabaseConfigured,
  upsertVisitor
};
