export default function Detail() {
  return (
    <section className="flex-col flex items-center pb-8">
      <h4 className="font-bold text-xl">About me</h4>
      <p className="text-center md:text-left text-lg mt-5 md:pl-8 mb-8 max-w-xl">
        I’m a software engineer currently based in Brooklyn, New York. My
        toolbelt includes Python, Node, and React/Redux/React Native. I’m a big
        fan of functional programming, strong typing, and automated testing. My
        perspective has been shaped by launching financial products at Intuit &
        Mint, running dozens of A/B tests on the Clinton campaign fundraising
        site, and building the Petal product and engineering team. When not
        looking at a screen, I can be found hiking to scenic viewpoints, scuba
        diving, and devouring sushi (not at the same time).
      </p>
      <div className="flex-col flex items-center">
        <h4 className="font-bold text-xl mb-4">Let's chat</h4>
        <a className="underline" href="https://www.linkedin.com/in/nathankane/">
          LinkedIn
        </a>
        <a className="underline" href="https://github.com/kanenathan213">
          Github
        </a>
        <p>hi@nathanrkane.com</p>
      </div>
    </section>
  )
}
