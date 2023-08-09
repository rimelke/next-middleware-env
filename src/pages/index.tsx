import useEnvValue from "@/hooks/useEnvValue";
import withEnv from "@/hooks/withEnv";
import { GetStaticProps } from "next";

interface HomePageProps {
  staticTime: string;
}

const HomePage = ({ staticTime }: HomePageProps) => {
  const helloMessage = useEnvValue("HELLO_MESSAGE");
  const runtimeTime = useEnvValue("TIME");

  return (
    <main>
      <h1>Static</h1>
      <p>This is statically generated in build time</p>
      <p>Time: {new Date(staticTime).toLocaleString("en-US")}</p>
      <h1>Middleware in Runtime</h1>
      <p>{helloMessage}</p>
      <p>Time: {new Date(runtimeTime).toLocaleString("en-US")}</p>
    </main>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = () => ({
  props: {
    staticTime: new Date().toISOString(),
  },
});

export default withEnv(HomePage);
