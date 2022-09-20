export const Boton = ({
  text,
  action,
}: {
  text: string;
  action: () => void;
}) => {
  return (
    <button
      className="bg-cyan-800 rounded-md pt-2 pb-1 px-2 -translate-y-1 text-white justify-self-center"
      onClick={() => {
        action();
      }}
    >
      {text}
    </button>
  );
};
