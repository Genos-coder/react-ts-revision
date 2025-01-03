import { ReactNode, useState } from 'react';

type PropsType = {
  children: string | ReactNode;
  color: string;
  position: { x: number; y: number };
  onMove: (dx: number, dy: number) => void;
};

export default function Box({
  children,
  color,
  position,
  onMove
}: PropsType) {
  const [lastCoordinates, setLastCoordinates] = useState<{ x: number; y: number } | null>(null);

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    e.currentTarget.setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (lastCoordinates) {
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      onMove(dx, dy);
    }
  }

  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    setLastCoordinates(null);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: 'grab',
        backgroundColor: color,
        position: 'absolute',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </div>
  );
}
