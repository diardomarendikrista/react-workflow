import React from "react";
import { Handle, Position } from "@xyflow/react";

// Custom Node
function QuestionNode({ data }) {
  return (
    <div className="rounded-lg bg-white shadow p-4 text-sm min-w-[140px] max-w-[240px]">
      <div className="font-medium mb-2 whitespace-pre-wrap break-words">
        {data.label || "Question"}
      </div>

      {/* handle target (masuk) */}
      <Handle
        type="target"
        position={Position.Top}
      />

      {/* handle source true / false */}
      <Handle
        type="source"
        id="true"
        position={Position.Bottom}
        style={{ left: "25%" }}
      />
      <Handle
        type="source"
        id="false"
        position={Position.Bottom}
        style={{ left: "75%" }}
      />
    </div>
  );
}

export const nodeTypes = { question: QuestionNode };
