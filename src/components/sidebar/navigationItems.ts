import {
  Home,
  MessageSquare,
  FolderKanban,
  Package,
  type LucideIcon,
} from "lucide-react";

import {
  KEY_NAV_ARTIFACTS,
  KEY_NAV_BOARDS,
  KEY_NAV_CHATS,
} from "../../constants/Constants";

interface NavigationItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

export const navigationItems: NavigationItem[] = [
  // { icon: Home, label: KEY_NAV_HOME, path: "/", visible: hasSeenHome() },
  //Example nevigation items
  { icon: FolderKanban, label: KEY_NAV_BOARDS, path: "/boards" },
  { icon: MessageSquare, label: KEY_NAV_CHATS, path: "/chats" },
  { icon: Package, label: KEY_NAV_ARTIFACTS, path: "/artifacts" },
];
