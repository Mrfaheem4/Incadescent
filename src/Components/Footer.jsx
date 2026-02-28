export default function Footer() {
  return (
    <div className="  bg-gray-100 px-8 py-6 border-t border-gray-200">
      <div className="flex justify-between items-center text-xs text-gray-400">
        <span>© 2026 Mr. Faheem</span>
        <div className="flex gap-4">
          <span>
            Animations by{" "}
            <a
              href="https://reactbits.dev"
              target="_blank"
              className="underline hover:text-gray-600"
            >
              React Bits
            </a>
          </span>
          <span>
            Powered by{" "}
            <a
              href="https://gsap.com"
              target="_blank"
              className="underline hover:text-gray-600"
            >
              GSAP
            </a>
          </span>
          <span>
            Design inspired by{" "}
            <a
              href="https://dribbble.com"
              target="_blank"
              className="underline hover:text-gray-600"
            >
              Dribbble
            </a>
          </span>
          <span>
            Icons by{" "}
            <a
              href="https://flaticon.com"
              target="_blank"
              className="underline hover:text-gray-600"
            >
              Flaticon
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
