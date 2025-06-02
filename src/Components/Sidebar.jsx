export default function Sidebar({
  addNewNode,
  selectedNode,
  setNodes,
  consoleLogNode,
}) {
  const handleLabelChange = (e) => {
    const newLabel = e.target.value;
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === selectedNode.id
          ? { ...node, data: { ...node.data, label: newLabel } }
          : node
      )
    );
  };

  return (
    <div className="absolute top-2 left-2 z-[1000] flex flex-col gap-2 bg-white p-4 shadow-md rounded-md w-[250px]">
      <button
        onClick={addNewNode}
        className="px-[15px] py-[10px] bg-[#007bff] hover:bg-[#0056b3] text-white border-none rounded-[5px] cursor-pointer text-[14px] font-bold shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
      >
        + ADD NODE
      </button>

      {selectedNode && (
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">Label:</label>
          <textarea
            className="border border-gray-300 px-2 py-1 rounded w-full min-h-[100px]"
            value={selectedNode.data.label}
            onChange={handleLabelChange}
          />
        </div>
      )}

      <button
        onClick={consoleLogNode}
        className="px-[15px] py-[10px] bg-[#007bff] hover:bg-[#0056b3] text-white border-none rounded-[5px] cursor-pointer text-[14px] font-bold shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
      >
        Console Log Hasil
      </button>
    </div>
  );
}
