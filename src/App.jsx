// WorkflowBuilder.jsx
import {
  addEdge,
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import { useCallback, useState } from "react";
import { initialEdges, initialNodes } from "./hardcodeData";
import { nodeTypes } from "./Components/QuestionNode";
import Sidebar from "Components/Sidebar";

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const hasAlreadyTwoOutgoing = (sourceId) =>
    edges.filter((e) => e.source === sourceId).length >= 2;

  // fungsi tambah edge / koneksi
  const onConnect = useCallback(
    (params) => {
      if (hasAlreadyTwoOutgoing(params.source)) {
        alert("Satu pertanyaan maksimum dua cabang (true & false).");
        return;
      }
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            id: `e-${params.source}-${params.target}-${params.sourceHandle}`,
            label: params.sourceHandle,
            // type: "step",
          },
          eds
        )
      );
    },
    [edges, setEdges]
  );

  const addNewNode = useCallback(() => {
    const newNodeId = `node-${Date.now()}`;
    const newNode = {
      id: newNodeId,
      type: "question", // sesuaikan dengan tipe node yang ada
      position: {
        x: Math.random() * 400 + 100, // posisi random dalam range tertentu
        y: Math.random() * 400 + 100,
      },
      data: {
        label: `Node ${nodes.length + 1}`,
        // tambahkan data lain sesuai kebutuhan node Anda
      },
    };

    setNodes((nds) => [...nds, newNode]);
  }, [nodes.length, setNodes]);

  const consoleLogNode = () => {
    console.log(nodes, "Nodes");
    console.log(edges, "Edges");
  };

  const onNodeClick = useCallback((event, node) => {
    setSelectedNodeId(node.id);
  }, []);

  const onPaneClick = useCallback(() => {
    setSelectedNodeId(null); // hapus seleksi
  }, []);

  const selectedNode = nodes.find((node) => node.id === selectedNodeId) || null;

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          fitView
        >
          <Controls />
          <MiniMap />
          <Background
            variant="dots"
            gap={12}
            size={1}
          />
        </ReactFlow>

        <Sidebar
          addNewNode={addNewNode}
          selectedNode={selectedNode}
          setNodes={setNodes}
          consoleLogNode={consoleLogNode}
        />
      </ReactFlowProvider>
    </div>
  );
}
