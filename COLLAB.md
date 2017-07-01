Collaboration
=============

If you haven't set up the server already, then please follow the instructions on `SETUP.md`

.HTML files are stored in `templates/`, and all have the suffix `.tpl.html` ("tpl" as in template).
The server will detect when these are changed, and then transform them to `.html` files where they 
will then be served on `http://localhost:8080`

For example, to edit `http://localhost:8080/safety.html`, open `templates/safety.tpl.html`, 
make your changes, save the file, and then go back to `http://localhost:8080/safety.html`
to see your changes in action

CSS is written in SASS (`.scss`), and stored in `css/source/`. The server will transform these files
into regular `.css` files and they can be accessed the same way that our HTML files are.

----------

To save your changes to this repository, you will need to make a git commit:

1. `git status` to see what changes you have made
2. `git add [file]`, or `git add --all` to add everything
3. `git commit -m [message]` to finalize your changes with a message
4. `git push origin master` to flush the changes to the server, 
where other people can then pull your changes.
