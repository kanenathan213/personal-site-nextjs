import { ScrollIndicator } from './ScrollIndicator'

type Props = {
  hasBeenScrolled: boolean
}

export default function Intro({ hasBeenScrolled }: Props) {
  return (
    <section className="min-h-screen flex-col flex items-center justify-center">
      <h1 className="text-4xl md:text-5xl tracking-tighter font-thin uppercase font-body leading-tight md:pr-8">
        Nathan Kane
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        I'm a software engineer who believes in building world-positive
        products.
      </h4>
      {hasBeenScrolled === false && <ScrollIndicator />}
    </section>
  )
}
