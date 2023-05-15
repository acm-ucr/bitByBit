import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";
import { languages } from "./data/Languages";
import { useContext } from "react";
import CodeContext from "../components/CodeContext";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedLang, setSelectedLang] = useState(languages[0]);
  const { language, setLanguage } = useContext(CodeContext);

  const handleSelection = (lang) => {
    setLanguage(lang);
    // setSelectedLang(lang);
    setIsOpen(false);
  };
  console.log("selected", language);
  // console.log(selectedLang);
  return (
    <div className="text-code-white font-readex font-light flex flex-col w-32">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex w-full gap-2 justify-between bg-code-black px-2 items-center ${
          isOpen ? `rounded-t-lg` : `rounded-full`
        }`}
      >
        {language.name}
        {!isOpen ? (
          <RxCaretDown className="text-2xl" />
        ) : (
          <RxCaretUp className="text-2xl" />
        )}
      </button>
      {isOpen && (
        <div className="absolute top-[88px] z-50 w-32">
          <div className="bg-code-black rounded-b-lg">
            {Object.entries(languages).map((language, index) => (
              <button
                key={index}
                className="px-2 pt-2 hover:text-code-purple w-full text-left"
                onClick={() =>
                  handleSelection({
                    name: languages[index].name,
                    id: languages[index].id,
                  })
                }
              >
                {languages[index].name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
