import ProblemDescription from "@/components/ProblemDescription";
import ProblemStateToggle from "@/components/ProblemStateToggle";
import CodeEditor from "@/components/CodeEditor";
import Console from "@/components/Console";
import { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import ProtectedPage from "@/components/ProtectedPage";
import { useRouter } from "next/router";
import axios from "axios";
import LoadingScreen from "@/components/LoadingScreen";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const Problems = () => {
  const [loaded, setLoaded] = useState(0);
  const [state, setState] = useState(0);
  const [problem, setProblem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        await axios
          .post("/api/getProblem", { id: id })
          .then((response) => setProblem(response.data));
        setLoaded(1);
      } catch (error) {
        console.error("Error fetching problem:", error);
        if (error.response.status === 400) {
          router.push("/404");
        }
      }
    };

    if (router.isReady) {
      fetchProblem();
    }
  }, [id]);

  return (
    <>
      {!loaded && <LoadingScreen />}
      {loaded && (
        <ProtectedPage title="Problem" restrictions={[]}>
          <div className="flex w-full h-[calc(100vh-64px)]">
            <PanelGroup direction="horizontal">
              <Panel defaultSize={50} minSize={20}>
                <ProblemStateToggle state={state} onUpdateState={setState} />
                <ProblemDescription problem={problem} />
              </Panel>
              <PanelResizeHandle className="flex flex-col bg-code-black h-full text-code-white place-content-center px-1">
                <FaCircle className="text-[8px] my-1" />
                <FaCircle className="text-[8px] my-1" />
                <FaCircle className="text-[8px] my-1" />
              </PanelResizeHandle>
              <Panel defaultSize={50} minSize={20}>
                <PanelGroup direction="vertical">
                  <Panel defaultSize={50} minSize={20}>
                    <div className="flex flex-col h-full overflow-auto">
                      <CodeEditor problem={problem} />
                    </div>
                  </Panel>
                  <PanelResizeHandle className="flex bg-code-black text-code-white place-content-center px-1">
                    <FaCircle className="text-[8px] m-1" />
                    <FaCircle className="text-[8px] m-1" />
                    <FaCircle className="text-[8px] m-1" />
                  </PanelResizeHandle>
                  <Panel defaultSize={25} minSize={25}>
                    <div className="h-full">
                      <Console problem={problem} />
                    </div>
                  </Panel>
                </PanelGroup>
              </Panel>
            </PanelGroup>
          </div>
        </ProtectedPage>
      )}
    </>
  );
};

export default Problems;
