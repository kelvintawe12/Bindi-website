
export function PageFooter() {
  return (
    <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
      <nav className="mb-2">
        <ul className="flex flex-wrap justify-center gap-4">
          <li>
            <a href="/donate" className="hover:text-blue-600">
              Donate
            </a>
          </li>
          <li>
            <a href="/volunteer" className="hover:text-blue-600">
              Volunteer
            </a>
          </li>
          <li>
            <a href="/impact" className="hover:text-blue-600">
              Impact
            </a>
          </li>
          <li>
            <a href="/stories" className="hover:text-blue-600">
              Stories
            </a>
          </li>
          <li>
            <a href="/events" className="hover:text-blue-600">
              Events
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-600">
              About Us
            </a>
          </li>
          <li>
            <a href="/partners" className="hover:text-blue-600">
              Partners
            </a>
          </li>
          <li>
            <a href="/resources" className="hover:text-blue-600">
              Resources
            </a>
          </li>
          <li>
            <a href="/home" className="hover:text-blue-600">
              Home
            </a>
          </li>
        </ul>
      </nav>
      © 2024 Bindi Website. All rights reserved.
    </footer>
  );
}
