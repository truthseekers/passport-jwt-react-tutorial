The context, localstorage, and useEffect code needs some work.

I'm not sure if I should just grab the localStorage values directly from localStorage or if I should store the localStorage in state.
The problem is that localStorage updates don't seem to cause re-renders(???)

May be able to just use navigate() in the context when localStorage gets updated, but.. I'm not sure the right way to handle this yet.

the basics of a fullstack passport & React boilerplate are done here but lots of work/optimizations need to be done.

Done: - Logout - Log in - Sign up - basic routing

Todos: ???

Passport + Refresh token in a separate tutorial
