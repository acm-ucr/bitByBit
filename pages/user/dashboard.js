import Problems from "@/components/Problems";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Filter from "@/components/Filter";
import { useState, useEffect } from "react";
import { tags, difficulties } from "../../components/data/Filters";
import ProtectedPage from "@/components/ProtectedPage";
import axios from "axios";

const Dashboard = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    axios
      .post("/api/getProblems")
      .then((response) => setProblems(response.data));
  }, []);

  const [filtered, setFiltered] = useState([]);
  const [filteredProblems, setFilteredProblems] = useState([]);

  useEffect(() => {
    setFilteredProblems(problems);
  }, [problems]);

  const clearAll = () => {
    setFiltered([]);
    setFilteredProblems(problems);
  };

  const apply = () => {
    if (filtered.length === 0) {
      setFilteredProblems(problems);
    } else {
      setFilteredProblems(
        problems.filter(
          (a) =>
            filtered.includes(a.data.difficulty) ||
            a.data.tags.some((r) => filtered.indexOf(r) >= 0)
        )
      );
    }
  };

  return (
    <ProtectedPage title="Dashboard" restrictions={[]}>
      <div className="bg-code-black flex justify-center items-center">
        <Row className="mb-0 flex items-cetner justify-center w-11/12">
          <Col xl={4} className=" flex justify-start items-center flex-col">
            <div className="rounded-2xl p-4 pt-3 w-full font-readex text-code-white bg-code-darkerpurple">
              <div className="flex text-lg justify-between mb-2 mr-0">
                <div className="text-3xl">Filters</div>
                <button
                  className="text-2xl font-extralight hover:text-code-lightpurple"
                  onClick={clearAll}
                >
                  clear all
                </button>
              </div>
              <div className="flex flex-col">
                <div className="mb-1 text-2xl">Tags</div>
                <div className="flex flex-wrap gap-1 pb-2 font-light">
                  {tags.map((tag, index) => (
                    <Filter
                      setFiltered={setFiltered}
                      filtered={filtered}
                      color={tag.color}
                      name={tag.name}
                      key={index}
                    />
                  ))}
                </div>
                <div className="mb-1 text-2xl">Difficulty</div>
                <div className="flex flex-wrap gap-1 font-light">
                  {difficulties.map((difficulty, index) => (
                    <Filter
                      setFiltered={setFiltered}
                      filtered={filtered}
                      color={difficulty.color}
                      name={difficulty.name}
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className="flex text-lg justify-end mb-2 mr-0">
                <button
                  className="text-2xl font-extralight hover:text-code-lightpurple"
                  onClick={apply}
                >
                  Apply
                </button>
              </div>
            </div>
          </Col>
          <Col xl={8} className="flex justify-center items-left flex-col">
            <Problems problems={filteredProblems} />
          </Col>
        </Row>
      </div>
    </ProtectedPage>
  );
};

export default Dashboard;
