import { Waypoint } from 'react-waypoint'

type Props = {
  handleBottomScolledTo: () => any
}

export default function Detail({ handleBottomScolledTo }: Props) {
  return (
    <section className="flex-col flex items-center pb-8">
      <h4 className="font-bold text-xl">About me</h4>
      <p className="text-center md:text-left text-lg mt-5 md:pl-8 mb-8 max-w-xl">
        I've worked with React, React Native, Node, and Python. I'm on the
        engineering team at Petal, a credit card startup based in New York City.
        When my laptop is shut, I like hiking, scuba diving, and devouring sushi
        (not at the same time).
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
        <Waypoint onEnter={handleBottomScolledTo} />
      </div>
    </section>
  )
}
