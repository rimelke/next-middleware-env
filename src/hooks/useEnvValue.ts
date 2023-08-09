import { EnvContext } from "@/contexts/EnvContext";
import { IEnv } from "@/types/env";
import { useContext } from "react";
import { WithEnvContext } from "./withEnv";

const useEnvValue = (key: keyof IEnv) => {
  const env = useContext(EnvContext);
  const withEnv = useContext(WithEnvContext);

  if (!withEnv) throw new Error("useEnv must be used within withEnv HOC");

  return env[key];
};

export default useEnvValue;
