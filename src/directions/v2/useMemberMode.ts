import { useSearchParams } from "react-router-dom";

// Member-mode toggle for preview pages (Events, Discounts).
// Adding ?member=1 to a URL flips preview state to full member view.
export function useMemberMode(): { isMember: boolean; toggleHref: string } {
  const [params] = useSearchParams();
  const isMember = params.get("member") === "1";
  const toggleHref = isMember ? "?" : "?member=1";
  return { isMember, toggleHref };
}
