{/*import { createContext, useContext } from "react";

export const DataContext = createContext();

export function DataContextProvider(props) {
  const [contextData, setContextData] = useState({});
  const contextQ = { contextData, setContextData };
  console.log(context);
  return (
    <DataContext.Provider value={contextQ}>
      {props.children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useDataContext must be user within a DataConextprovider");
  }
  return context;
}
*/}