import type { NextPage } from "next";
import Card from "components/Card";

const Home: NextPage = () => {
  return (
    <>
      <div className="text-white">
        <main className="flex min-h-screen items-center justify-center bg-zinc-900">
          <div className="container p-8">
            <h1 className="text-center text-6xl font-bold">
              Welcome to{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-br from-purple-400 to-pink-600 bg-clip-text text-transparent"
              >
                Next.js!
              </a>
            </h1>

            <p className="my-12 text-center text-xl">
              Get started by editing{" "}
              <code className="ml-1 rounded-md bg-zinc-800 py-2 px-3">
                pages/index.tsx
              </code>
            </p>

            <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2">
              <Card link="https://nextjs.org/docs" title="Documentation">
                Find in-depth information about Next.js features and API.
              </Card>

              <Card link="https://nextjs.org/learn" title="Learn">
                Learn about Next.js in an interactive course with quizzes!
              </Card>

              <Card
                link="https://github.com/vercel/next.js/tree/canary/examples"
                title="Examples"
              >
                Discover and deploy boilerplate example Next.js projects.
              </Card>

              <Card link="https://vercel.com/new" title="Deploy">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </Card>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
