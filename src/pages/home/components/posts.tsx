import { Link } from 'react-router-dom'

export function Posts() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-lg font-bold text-base-subtitle">Publicações</h2>
        <span className="text-s text-base-span">6 publicações</span>
      </div>

      <input
        type="text"
        placeholder="Buscar publicações"
        className="mt-3 h-[50px] w-full rounded-md border border-base-border bg-base-input px-4 placeholder:text-base-label"
      />

      <ul className="mt-12 grid grid-cols-2 gap-8">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <li
            key={index}
            className="h-[260px] overflow-hidden rounded-[10px] bg-base-post p-8"
          >
            <Link to="post/1">
              <header className="flex justify-between">
                <h1 className="text-xl font-bold text-base-title">
                  JavaScript data types and data structures
                </h1>
                <span className="ml-4 w-[80px] text-end text-sm text-base-span">
                  Há 1 dia
                </span>
              </header>

              <p className="paragraph-ellipsis mt-4">
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have. These can be used to
                build other data structures. Wherever possible, comparisons with
                other languages are drawn. Dynamic typing JavaScript is a
                loosely typed and dynamic language. Variables in JavaScript are
                not directly
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
