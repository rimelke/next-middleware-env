import useIsomorphicEffect from "@/hooks/useIsomorphicEffect";
import { IEnv } from "@/types/env";
import nookies from "nookies";
import { createContext, PropsWithChildren, useState } from "react";

export const EnvContext = createContext<IEnv | null>(null);

const getEnv = () => {
  try {
    const envCookie = nookies.get(null)?.env;

    if (!envCookie) return {};

    nookies.destroy(null, "env");
    return JSON.parse(Buffer.from(envCookie, "base64").toString("utf-8"));
  } catch (err) {
    return {};
  }
};

export const EnvProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [env, setEnv] = useState(null);

  useIsomorphicEffect(() => {
    setEnv(getEnv());
  }, []);

  return <EnvContext.Provider value={env}>{children}</EnvContext.Provider>;
};
