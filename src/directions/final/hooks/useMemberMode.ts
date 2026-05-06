import { useSearchParams } from "react-router-dom";

/** Read ?member=1 from URL. Returns true when toggle is on. */
export function useMemberMode(): { isMember: boolean; toggleHref: string } {
  const [params] = useSearchParams();
  const isMember = params.get("member") === "1";
  // Build a toggled href that flips member state but preserves other params.
  const next = new URLSearchParams(params);
  if (isMember) next.delete("member");
  else next.set("member", "1");
  const qs = next.toString();
  return { isMember, toggleHref: qs ? `?${qs}` : "" };
}
