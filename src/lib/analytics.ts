import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://zpwlpjtlcenlpfptvqof.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpwd2xwanRsY2VubHBmcHR2cW9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NDI4MDIsImV4cCI6MjEwMDQxODgwMn0._V74lVw9kH7GSdt7ylwlYxpEMucUYDJ15LRi2AZNhXE";

export const analyticsClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function trackPageView() {
  await analyticsClient.from("page_views").insert({ page: "landing" });
}

export function joinPresence() {
  const id = Math.random().toString(36).slice(2);
  const channel = analyticsClient.channel("landing-visitors", {
    config: { presence: { key: id } },
  });
  channel.subscribe((status) => {
    if (status === "SUBSCRIBED") {
      channel.track({ online_at: new Date().toISOString() });
    }
  });
  return channel;
}
