import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Seite nicht gefunden — TnT Studio</title>
        <meta name="description" content="Diese Seite existiert nicht. Zurück zur Startseite oder zum Blog." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">404</p>
          <h1 className="mt-2 text-4xl font-black text-neutral-900 sm:text-5xl">
            Seite nicht gefunden.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-neutral-500">
            Der Link scheint nicht zu stimmen. Hier geht es zurück in bekannte Gewässer.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-700"
            >
              Zur Startseite
            </Link>
            <Link
              to="/blog/"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition-all hover:border-neutral-900 hover:bg-neutral-50"
            >
              Zum Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
