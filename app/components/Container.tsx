"use client";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-12 xl:px-24">
      {children}
    </div>
  );
};

export default Container;
