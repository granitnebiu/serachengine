import React from "react";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 mx-auto w-full">
      <div className="flex w-full justify-center bg-blue-500 py-2 text-sm text-white">
        <p>Copyright &copy; {new Date().getFullYear()} Granit Nebiu</p>
      </div>
    </footer>
  );
}
