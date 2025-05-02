import React, { useState } from 'react';
import { GlobeIcon, ChevronDownIcon } from 'lucide-react';
interface Language {
  code: string;
  name: string;
  flag: string;
}
const languages: Language[] = [{
  code: 'en',
  name: 'English',
  flag: '🇬🇧'
}, {
  code: 'sw',
  name: 'Swahili',
  flag: '🇰🇪'
}];
export const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const changeLang = (lang: Language) => {
    setCurrentLang(lang);
    setIsOpen(false);
    // Here you would typically trigger the language change in your i18n setup
  };
  return <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center space-x-1 text-white hover:text-yellow-500 transition-colors" aria-label="Select language">
        <GlobeIcon className="h-5 w-5" />
        <span>{currentLang.flag}</span>
        <ChevronDownIcon className="h-4 w-4" />
      </button>
      {isOpen && <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          {languages.map(lang => <button key={lang.code} onClick={() => changeLang(lang)} className={`
                w-full px-4 py-2 text-sm text-left hover:bg-gray-100
                ${currentLang.code === lang.code ? 'text-coral-500' : 'text-gray-700'}
              `}>
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </button>)}
        </div>}
    </div>;
};