import { EnvProvider } from "@/contexts/EnvContext";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <EnvProvider>
    <Component {...pageProps} />
  </EnvProvider>
);

export default App;
