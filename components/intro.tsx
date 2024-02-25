import { ScrollIndicator } from './ScrollIndicator'

type Props = {
  hasBeenScrolled: boolean
}

export default function Intro({ hasBeenScrolled }: Props) {
  return (
    <section className="min-h-screen flex-col flex items-center justify-center">
      <h1 className="text-center text-4xl md:text-5xl tracking-wide font-thin uppercase font-body leading-tight">
        Nathan Kane
      </h1>
      <h4 className="text-center md:text-center text-lg mt-5 md:pl-8">
        I&apos;m a software engineer who believes in building impactful
        products.
      </h4>
      {hasBeenScrolled === false && <ScrollIndicator />}
    </section>
  )
}
