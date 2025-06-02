export const initialNodes = [
  {
    id: "q1",
    type: "question",
    position: { x: 0, y: 0 },
    data: { label: "Apakah pengguna login?" },
  },
  {
    id: "q2",
    type: "question",
    position: { x: -150, y: 150 },
    data: { label: "Tampilkan halaman login" },
  },
  {
    id: "q3",
    type: "question",
    position: { x: 150, y: 150 },
    data: { label: "Muat dashboard" },
  },
];

export const initialEdges = [
  {
    id: "e-q1-q2",
    source: "q1",
    target: "q2",
    sourceHandle: "false",
    label: "false",
  },
  {
    id: "e-q1-q3",
    source: "q1",
    target: "q3",
    sourceHandle: "true",
    label: "true",
  },
];
