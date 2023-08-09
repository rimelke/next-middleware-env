import { EnvContext } from "@/contexts/EnvContext";
import { IEnv } from "@/types/env";
import { useContext } from "react";

const useEnv = () => {
  const env = useContext(EnvContext);

  const getValue = (key: keyof IEnv) => env[key];

  return { getValue };
};

export default useEnv;
