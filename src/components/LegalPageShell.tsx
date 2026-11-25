import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LegalPageShellProps = {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
};

const LegalPageShell = ({ title, description, path, children }: LegalPageShellProps) => (
  <>
    <Helmet>
      <title>{title} | Western Eagle Transport LLC</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://westerneagletransportllc.com${path}`} />
    </Helmet>

    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-12 bg-secondary">
          <div className="container-custom px-6 text-center">
            <p className="section-label">Western Eagle Transport LLC</p>
            <h1 className="heading-secondary text-foreground">{title}</h1>
            <p className="text-muted-foreground mt-4">Last updated: 25 November 2026</p>
          </div>
        </section>

        <section className="section-padding pt-10 md:pt-14">
          <article className="container-custom max-w-4xl px-6">
            <div className="bg-card border border-border rounded-xl p-6 sm:p-9 lg:p-12 space-y-8">
              {children}
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  </>
);

export default LegalPageShell;
