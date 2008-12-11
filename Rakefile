# Mac and Firefox only, sorry
task :default do
  `cat jquery-bookmarklet.js | \
   ./make-bookmarklet.pl > bookmarklet.html && \
   open -a Firefox bookmarklet.html && sleep 5 && rm bookmarklet.html`
end