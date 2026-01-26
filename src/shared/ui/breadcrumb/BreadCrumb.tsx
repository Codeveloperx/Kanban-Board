import { House } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <House className="w-4 h-4 text-zinc-500" />
      <nav className="text-sm">
        <ul className="flex gap-1 text-gray-600">
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index !== 0 && <span className="mx-1">/</span>}
              <Link
                to={item.path}
                className="hover:text-zinc-900 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
