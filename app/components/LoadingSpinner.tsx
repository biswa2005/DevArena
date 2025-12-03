"use client";

export default function LoadingSpinner() {
  return (
    <div className="loader-wrap">
      <div className="loader" aria-hidden>
        <div className="ring-1"></div>
        <div className="ring-2"></div>
        <div className="dot" />
      </div>
    </div>
  );
}
