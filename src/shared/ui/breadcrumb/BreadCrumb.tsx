import { House } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbTemplate {
  name: string;
  path: string;
}

interface BreadcrumbProps {
  template: BreadcrumbTemplate[];
  params?: Record<string, string>;
}

const replacePlaceholders = (
  path: string,
  params: Record<string, string> = {},
) => {
  return Object.entries(params).reduce(
    (acc, [key, value]) => acc.replaceAll(`{${key}}`, value),
    path,
  );
};

const Breadcrumb = ({ template, params }: BreadcrumbProps) => {
  const items = template.map(({ name, path }) => ({
    name: replacePlaceholders(name, params),
    path: replacePlaceholders(path, params),
  }));

  return (
    <div className="flex items-center gap-2 mb-4 pt-4 px-5">
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
