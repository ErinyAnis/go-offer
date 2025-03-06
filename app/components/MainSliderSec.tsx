import Link from "next/link";
import Container from "./Container";
import MainTitle from "./ui/MainTitle";

interface ImainTitle {
  mainTitle: string;
  allCoupons?: boolean;
  children: React.ReactNode;
}

const MainSliderSec = ({ mainTitle, children, allCoupons }: ImainTitle) => {
  return (
    <section className="sec-padding">
      <Container>
        {allCoupons ? (
          <div className="flex items-center justify-between gap-5">
            <MainTitle text={mainTitle} />
            <Link
              href={"/"}
              className="text-amber-400 underline decoration-amber-500/40 main-transition hover:decoration-amber-400"
            >
              See all
            </Link>
          </div>
        ) : (
          <MainTitle text={mainTitle} />
        )}

        {children}
      </Container>
    </section>
  );
};

export default MainSliderSec;
