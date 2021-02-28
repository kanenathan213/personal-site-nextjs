import Alert from './alert'
import Meta from './meta'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

type Props = {
  preview?: string
  children: React.ReactNode
}

export default function Layout({ preview, children }: Props) {
  return (
    <>
      <Meta />
      <div className="min-h-screen vertical-gradient-bg font-body">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
    </>
  )
}
