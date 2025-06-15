import React, { useState } from 'react';
import { TabsProps } from '../../../types';

const Tabs: React.FC<TabsProps> = ({ tabs, className = '' }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={className}>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex -mb-px space-x-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm flex items-center
                transition-colors duration-200
                ${activeTab === index
                  ? 'border-primary text-primary dark:text-primary-light'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'}
              `}
            >
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="pt-4 animate-fade-in">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;