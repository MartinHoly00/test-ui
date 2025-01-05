type ButtonProps = {
  children: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      style={{
        padding: "8px 16px",
        backgroundColor: "red",
        borderRadius: "4px",
        border: "2px solid black",
        color: "white",
      }}
    >
      {children}
    </button>
  );
};
