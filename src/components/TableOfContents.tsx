import React from "react";

interface Header {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  headers: Header[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headers }) => {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav aria-label="Table of contents" className="sticky top-0 py-4">
      <ul className="space-y-2">
        {headers.map((header) => (
          <li key={header.id} className="list-none">
            <button
              onClick={() => scrollToElement(header.id)}
              className="text-blue-500 hover:text-blue-600 transition-colors duration-200 ease-in-out text-left w-full"
            >
              {header.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
