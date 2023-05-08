import ProblemDescription from "@/components/ProblemDescription";
import ProblemSolution from "@/components/ProblemSolution";
import ProblemStateToggle from "@/components/ProblemStateToggle";
import ProblemSubmission from "@/components/ProblemSubmission";
import CodeEditor from "@/components/CodeEditor";
import Console from "@/components/Console";

import { useState, useRef } from "react";
import LanguageSelector from "@/components/LanguageSelector";

const useResize = (containerRef, panelRef, initialWidth, minWidth = 0) => {
  const [panelWidth, setPanelWidth] = useState(initialWidth);

  const onResizeStart = () => {
    if (panelRef.current) {
      panelRef.current.style.pointerEvents = "none";
      panelRef.current.style.userSelect = "none";
    }
    if (containerRef.current) {
      containerRef.current.classList.add("resizing");
      containerRef.current.style.cursor = "ew-resize";
    }
    window.addEventListener("pointermove", onResize);
    window.addEventListener("pointerup", onResizeEnd);
  };

  const onResize = (e) => {
    if (containerRef.current) {
      const bounds = containerRef.current.getBoundingClientRect();
      const newWidth = e.clientX - bounds.left;
      if (newWidth >= minWidth) {
        setPanelWidth(newWidth);
      } else {
        setPanelWidth(minWidth);
      }
    }
  };

  const onResizeEnd = () => {
    if (panelRef.current) {
      panelRef.current.style.pointerEvents = "auto";
      panelRef.current.style.userSelect = "auto";
    }
    if (containerRef.current) {
      containerRef.current.classList.remove("resizing");
      containerRef.current.style.cursor = "auto";
    }
    window.removeEventListener("pointermove", onResize);
    window.removeEventListener("pointerup", onResizeEnd);
  };

  return { panelWidth, onResizeStart };
};

const Problems = () => {
  const [state, setState] = useState(0);

  const containerRef = useRef();
  const panelRef = useRef();
  const handleWidth = 16;
  const maxContainerWidth = window.innerWidth;

  const { panelWidth, onResizeStart } = useResize(
    containerRef,
    panelRef,
    maxContainerWidth / 2
  );

  return (
    <>
      <div
        ref={containerRef}
        style={{
          width: "100%",
          maxWidth: `${maxContainerWidth}px`,
          height: "400px",
          display: "flex",
        }}
      >
        <div
          ref={panelRef}
          style={{
            position: "relative",
            width: `${panelWidth}px`,
            maxWidth: "100%",
            height: "100%",
            paddingRight: `${handleWidth}px`,
            display: "flex",
            "flex-direction": "column",
          }}
        >
          <ProblemStateToggle state={state} onUpdateState={setState} />
          {state === 0 && (
            <ProblemDescription
              name="TEST"
              difficulty="HARD"
              tags={["arrays", "hashmap"]}
              description="TEST DESCRIPTION"
              example="TEST EXAMPLE"
              constraints={["constrain 1", "constrain 2"]}
            />
          )}
          {state === 1 && (
            <ProblemSolution
              entries={[
                {
                  methodName: "TEST METHOD",
                  description: "TEST DESCRIPTION",
                  implementation: "TEST IMPLEMENTATION",
                  timeComplexity: "TEST TIME COMPLEXITY",
                  spaceComplexity: "TEST SPACE COMPLEXITY",
                },
              ]}
            />
          )}
          {state === 2 && <ProblemSubmission />}

          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              height: "100%",
              background: "white",
              width: `${handleWidth}px`,
              cursor: "ew-resize",
            }}
            onPointerDown={onResizeStart}
          ></div>
        </div>
        <div className="flex flex-col flex-grow">
          <LanguageSelector />
          <CodeEditor />
          <Console />
        </div>
      </div>
    </>
  );
};

export default Problems;
