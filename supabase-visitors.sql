create table if not exists public.geostreak_visitors (
  visitor_id text primary key,
  first_seen timestamptz not null default now(),
  last_seen timestamptz not null default now(),
  visit_count integer not null default 1,
  first_path text,
  last_path text,
  user_agent text
);

create index if not exists geostreak_visitors_last_seen_idx
  on public.geostreak_visitors (last_seen desc);
