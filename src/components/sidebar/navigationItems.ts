import {
  Home,
  MessageSquare,
  FolderKanban,
  Package,
  type LucideIcon,
} from "lucide-react";

import {
  KEY_NAV_ARTIFACTS,
  KEY_NAV_CHATS,
  KEY_NAV_HOME,
  KEY_NAV_PROJECTS,
} from "../../constants/Constants";

interface NavigationItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

export const navigationItems: NavigationItem[] = [
  { icon: Home, label: KEY_NAV_HOME, path: "/" },
  //Example nevigation items
  { icon: MessageSquare, label: KEY_NAV_CHATS, path: "/chats" },
  { icon: FolderKanban, label: KEY_NAV_PROJECTS, path: "/projects" },
  { icon: Package, label: KEY_NAV_ARTIFACTS, path: "/artifacts" },
];
