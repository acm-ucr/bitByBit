import ProblemDescription from "@/components/ProblemDescription";
import ProblemSolution from "@/components/ProblemSolution";
import ProblemStateToggle from "@/components/ProblemStateToggle";
import CodeEditor from "@/components/CodeEditor";
import Console from "@/components/Console";
import React, { useState, useRef } from "react";
import LanguageSelector from "@/components/LanguageSelector";
import { FaCircle } from "react-icons/fa";
import ProtectedPage from "@/components/ProtectedPage";
import { useRouter } from "next/router";

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
    if (typeof window !== "undefined") {
      window.addEventListener("pointermove", onResize);
      window.addEventListener("pointerup", onResizeEnd);
    }
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
    if (typeof window !== "undefined") {
      window.removeEventListener("pointermove", onResize);
      window.removeEventListener("pointerup", onResizeEnd);
    }
  };

  return { panelWidth, onResizeStart };
};

const Problems = () => {
  const [state, setState] = useState(0);
  const [problem, setProblem] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await axios.get(`/api/getProblem?id=${id}`);
        setProblem(response.data);
      } catch (error) {
        console.error("Error fetching problem:", error);
      }
    };

    fetchProblem();
  }, [id]);

  const containerRef = useRef();
  const panelRef = useRef();
  const handleWidth = 16;
  let maxContainerWidth;
  if (typeof window !== "undefined") {
    maxContainerWidth = window.innerWidth;
  }

  const { panelWidth, onResizeStart } = useResize(
    containerRef,
    panelRef,
    maxContainerWidth / 2,
    maxContainerWidth / 3
  );

  return (
    <ProtectedPage title="Problem" restrictions={[]}>
      <div
        ref={containerRef}
        style={{
          maxWidth: `${maxContainerWidth}px`,
        }}
        className="flex w-full h-full"
      >
        <div
          ref={panelRef}
          style={{
            width: `${panelWidth}px`,
            paddingRight: `${handleWidth}px`,
          }}
          className="relative flex flex-col h-full max-w-full"
        >
          <ProblemStateToggle state={state} onUpdateState={setState} problem={problem} onUpdateProblem={setProblem} />
          {state === 0 && <ProblemDescription />}
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

          <div
            style={{
              width: `${handleWidth}px`,
            }}
            onPointerDown={onResizeStart}
            className="bg-code-black absolute top-0 right-0 h-full text-code-white cursor-ew-resize text-center place-content-center flex justify-center items-center flex-col px-2"
          >
            <FaCircle className="text-[8px] my-1" />
            <FaCircle className="text-[8px] my-1" />
            <FaCircle className="text-[8px] my-1" />
          </div>
        </div>
        <div className="flex flex-col flex-grow">
          <LanguageSelector />
          <div className="flex flex-col flex-grow h-full overflow-auto">
            <CodeEditor />
          </div>
          <div className="w-full text-code-purple h-6 "></div>
          <Console />
        </div>
      </div>
    </ProtectedPage>
  );
};

export default Problems;
