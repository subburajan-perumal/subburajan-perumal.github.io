'use client'; // Error components must be Client Components

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return <div>Something went wrong.</div>;
};

export default Error;
