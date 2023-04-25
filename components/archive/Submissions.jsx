// fix font
// fix position of x submissions in the last year

const Submissions = () => {
  return (
    <div className="rounded-3xl font-readex text-code-white w-full h-fit bg-code-darkerpurple p-3">
      <div className="flex justify-between mx-2">
        <p>x submissions in the last year</p>
        <div className="flex items-start gap-1">
          <div className="bg-code-lightpink p-2" />
          <div className="bg-code-pink p-2" />
          <div className="bg-code-lightpurple p-2" />
          <div className="bg-code-purple p-2" />
        </div>
      </div>
      <div className="flex">
        <div className="ml-1 mr-2 flex justify-end flex-col">
          <p>Mon</p>
          <p>Wed</p>
          <p>Sat</p>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-start p-0">
            <div className="mr-10 !mb-0">Jan</div>
            <div>Feb</div>
          </div>
          <div className="flex flex-wrap gap-1 p-0">
            {Array(196)
              .fill(0)
              .map((_, i) => (
                <div key="i" className="bg-code-white p-2 "></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submissions;
