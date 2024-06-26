import { FaDiscord, FaGithub } from "react-icons/fa";

const Separator = ({ className }: { className?: string }) => (
  <div
    className={`h-5 border xl:h-6 xl:border-2 border-custom-stroke ${className}`}
  />
);

const GithubLink = () => (
  <a
    href="https://github.com/bitcoinsearch/bitcoinsearch-app"
    target="_blank"
    rel="noreferrer"
    className="focus:outline-none"
  >
    <FaGithub className="text-[24px] md:text-[40px]" />
  </a>
);

const DiscordLink = () => (
  <a
    href="https://discord.gg/EAy9XMufbY"
    target="_blank"
    rel="noreferrer"
    className="focus:outline-none"
  >
    <FaDiscord className="text-[28px] md:text-[48px]" />
  </a>
);

const StatsLink = () => (
  <a
    href="https://visits.bitcoindevs.xyz/share/0Beh7BUzocqrtgA5/bitcoin-search"
    target="_blank"
    rel="noreferrer"
    className="underline"
  >
    View our public visitor count
  </a>
);

const ContactSocials = () => {
  return (
    <div className="flex items-center gap-2 md:gap-4 lg:gap-4">
      <GithubLink />
      <DiscordLink />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="text-custom-primary-text bg-custom-background bottom-0 text-left md:text-center w-full border-t border-custom-stroke text-xs md:text-base 2xl:text-xl leading-normal dark:text-custom-primary-text">
      <div className="flex flex-col md:flex-row gap-y-5 items-center justify-between p-5 md:p-7 2xl:p-10 w-full max-w-[1920px] m-auto">
        <div className="hidden md:flex">
          <ContactSocials />
        </div>
        <Separator className="hidden xl:block" />
        <p>
          Built with <span>🧡</span> by the{" "}
          <a
            href="https://bitcoindevs.xyz/"
            target="_blank"
            rel="noreferrer"
            className="underline font-medium text-custom-brightOrange-100"
          >
            Bitcoin Dev Project
          </a>
        </p>
        <Separator className="hidden xl:block" />
        <div className="hidden md:block">
          <StatsLink />
        </div>
        <Separator className="hidden xl:block" />
        <div className="block md:hidden border-[0.5px] border-custom-stroke w-full" />
        <div className="flex w-full md:w-auto items-center justify-between gap-3 md:gap-8">
          <div className="block md:hidden">
            <ContactSocials />
          </div>
          <Separator className="block md:hidden" />
          <div className="block md:hidden max-w-[100px] text-center">
            <StatsLink />
          </div>
          <Separator className="block md:hidden" />
          <p className="hidden md:block">
            We&apos;d love to hear your feedback on this project
          </p>
          <a
            href="https://cryptpad.fr/form/#/2/form/view/3P2CsohsHOkcH7C+WdtX0-tvqjBHqXnAmz5D9yx0e04/"
            target="_blank"
            className="font-semibold text-white focus:outline-none px-3 py-3 md:py-4 md:px-6 bg-custom-primary-text rounded-xl dark:text-black"
          >
            Give feedback
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
