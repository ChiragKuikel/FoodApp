export default function Container({ className = "", as: As = "div", children }) {
  return (
    <As className={`mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </As>
  );
}

