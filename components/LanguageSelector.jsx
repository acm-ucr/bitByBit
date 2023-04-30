import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";

const LanguageSelector = ({ state, onUpdateState }) => {
  const languages = ["Python", "JavaScript", "C++"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Python");
  const handleSelection = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };
  return (
    <div className="text-code-white font-readex font-light flex flex-col m-5 w-32">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex w-full gap-2 justify-between bg-code-black px-2 items-center ${
          isOpen ? `rounded-t-lg` : `rounded-full`
        }`}
      >
        {selectedLang}
        {!isOpen ? (
          <RxCaretDown className="text-2xl" />
        ) : (
          <RxCaretUp className="text-2xl" />
        )}
      </button>
      {isOpen && (
        <div className="bg-code-black rounded-b-lg">
          {languages.map((lang, index) => {
            if (lang != selectedLang) {
              return (
                <button
                  key={index}
                  className="px-2 pt-2 hover:text-code-purple w-full text-left"
                  onClick={() => handleSelection(lang)}
                >
                  {lang}
                </button>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
