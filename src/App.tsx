import React, { useContext } from "react";

const colorTheme = {
  light: {
    textColor: "#black",
    backgroundColor: "#white",
    containerColor: "teal",
  },
  dark: {
    textColor: "#white",
    backgroundColor: "#333",
    containerColor: "salmon",
  },
};

const ThemeContext = React.createContext(colorTheme.light);

const Section: React.FC = ({ children }) => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ width: "100%", height: "50%", backgroundColor: theme.backgroundColor }}>
      {children}
    </div>
  );
}

const Component = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ width: "100%", height: "100px", backgroundColor: theme.containerColor }} />
  );
}

function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#333",
          color: "white",
        }}
      >
        Header
      </div>
      <ThemeContext.Provider value={colorTheme.light}>
        <Section>
          <Component />
        </Section>
      </ThemeContext.Provider>
      <ThemeContext.Provider value={colorTheme.dark}>
        <Section>
          <Component />
        </Section>
      </ThemeContext.Provider>
    </div>
  );
}

export default App
