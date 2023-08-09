import { EnvContext } from "@/contexts/EnvContext";
import { ComponentType, createContext, useContext } from "react";

export const WithEnvContext = createContext(false);

const withEnv = (Component: ComponentType) => {
  const Wrapper = (props: any) => {
    const env = useContext(EnvContext);

    return (
      <WithEnvContext.Provider value={true}>
        {env && <Component {...props} />}
      </WithEnvContext.Provider>
    );
  };

  return Wrapper;
};

export default withEnv;
