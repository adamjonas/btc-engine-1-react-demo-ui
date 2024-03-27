import useIsInitialStateWithoutFilter from "@/hooks/useIsInitialStateWithoutFilter";
import GithubIcon from "../svgs/GithubIcon";

const Separator = ({ className }: { className?: string }) => (
  <div className={`h-5 border xl:h-6 xl:border-2 border-gray ${className}`} />
);

const GithubLink = () => (
  <a
    href="https://github.com/bitcoinsearch/bitcoinsearch-app"
    target="_blank"
    rel="noreferrer"
    className="focus:outline-none"
  >
    <GithubIcon className="w-8 h-8 2xl:w-14 2xl:h-14" />
  </a>
);

const StatsLink = () => (
  <a
    href="https://visits.bitcoindevs.xyz/share/0Beh7BUzocqrtgA5/bitcoin-search"
    target="_blank"
    rel="noreferrer"
    className="underline"
  >
    View our public visitor counts
  </a>
);

const ResultFooter = () => {
  return (
    <footer className="bg-white bottom-0 text-left md:text-center w-full border-t border-gray text-xs md:text-base 2xl:text-xl leading-normal">
      <div className="flex flex-col md:flex-row gap-y-5 items-center justify-between p-5 md:p-7 2xl:p-10 w-full max-w-[1920px] m-auto">
        <div className="hidden md:block">
          <GithubLink />
        </div>
        <Separator className="hidden xl:block" />
        <p>
          Built with <span>🧡</span> by the{" "}
          <a
            href="https://bitcoindevs.xyz/"
            target="_blank"
            rel="noreferrer"
            className="underline font-medium text-brightOrange-100"
          >
            Bitcoin Dev Project
          </a>
        </p>
        <Separator className="hidden xl:block" />
        <div className="hidden md:block">
          <StatsLink />
        </div>
        <Separator className="hidden xl:block" />
        <div className="block md:hidden border-[0.5px] border-gray w-full" />
        <div className="flex w-full md:w-auto items-center justify-between gap-3 md:gap-8">
          <div className="block md:hidden">
            <GithubLink />
          </div>
          <Separator className="block md:hidden" />
          <div className="block md:hidden max-w-[100px] text-center">
            <StatsLink />
          </div>
          <Separator className="block md:hidden" />
          <p className="hidden md:block">
            We&apos;d love to hear your feedback on this project
          </p>
          <button className="font-semibold text-white focus:outline-none px-3 py-3 md:py-4 md:px-6 bg-darkGray-200 rounded-xl">
            Give feedback
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ResultFooter;
