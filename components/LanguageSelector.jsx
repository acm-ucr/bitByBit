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
    <div className="text-code-white font-readex font-light">
      <div className="flex flex-col m-5 w-28">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`flex justify-between bg-code-black px-2 items-center ${
            isOpen ? `rounded-t-lg` : `rounded-full`
          }`}
        >
          {selectedLang}
          {!isOpen ? (
            <div>
              <RxCaretDown className="text-2xl"/>
            </div>
          ) : (
            <div>
              <RxCaretUp className="text-2xl"/>
            </div>
          )}
        </button>
        {isOpen && (
          <div className="bg-code-black rounded-b-lg flex flex-col">
            {languages.map((lang, index) => (
              <button
                key={index}
                className="px-2 hover:text-code-purple w-full text-left"
                onClick={() => handleSelection(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
