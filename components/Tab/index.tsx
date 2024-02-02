import "./style.scss";

type TabType = {
  value: string;
  key: string;
};

type TabProps = {
  tabs: TabType[];
  activeTab: string;
  handleTabChange: (tab: string) => void;
};

const Tab = ({ tabs, activeTab, handleTabChange }: TabProps) => {
  return (
    <div className="d-flex">
      {tabs.map((tab, idx) => {
        const isActive = tab.key === activeTab;
        return (
          <a
            key={idx}
            onClick={() => handleTabChange(tab.key)}
            className={`px-4 py-3 tab ${isActive ? "tab-active" : ""}`}
          >
            {tab.value}
          </a>
        );
      })}
    </div>
  );
};

export default Tab;
