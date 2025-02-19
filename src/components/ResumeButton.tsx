import { useState } from "react";

const ResumeButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-4">
      {/* Download Button */}
      <a
        href="/Resume.pdf" // Updated to match your file name exactly
        download="Resume.pdf"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
      >
        <span>Download Resume</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </a>

      {/* Preview Button - Removed */}
      {/* <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/20 hover:bg-primary/10 text-primary font-medium transition-colors"
      >
        <span>Preview Resume</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </button> */}

      {/* Preview Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-[80vh] bg-background rounded-xl border border-secondary/10">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-2 -right-2 p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <iframe
              src="/Resume.pdf" // Updated to match your file name exactly
              className="w-full h-full rounded-xl"
              title="Resume Preview"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeButton;
