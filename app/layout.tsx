import "@/styles/global.css";
import GithubCorner from "@/components/github-corner";

export const metadata = {
  title: "NextGramTS",
  description:
    "A sample Next.js app with typescript showing dynamic routing with modals as a route.",
  metadataBase: new URL("https://next-gram-ts.vercel.app"),
};

type LayoutProps = {
  children: React.ReactNode;
  modal?: React.ReactNode;
};

export default function Layout({ children, modal }: LayoutProps) {
  return (
    <html>
      <body>
        <GithubCorner />
        {children}
        {modal}
      </body>
    </html>
  );
}
