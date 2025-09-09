#### Common error #1

When you try to 'npm run dev' but see this error:

$\color{rgb(255,0,0)}{\textsf{[ERROR] [UnhandledRejection] }}$
$\color{rgb(0,0,0)}{\textsf{Astro detected an unhandled rejection. Here's the stack trace: }}$
$\color{rgb(0,0,0)}{\textsf{Error: ENOSPC: System limit for number of file watchers reached, watch 'blah blah blah'}}$

Follow this:

```shell
sudo sysctl fs.inotify.max_user_watches=524288
sudo sysctl -p
```
