function Square() {
  return (
    <button className="bg-white border border-black m-1 h-12 w-12 p-1 text-lg font-semibold">
      X
    </button>
  );
}
export default function Board() {
  return (
    <>
      <div>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </>
  );
}
