
PROJ=wde
SITE=_site
GH_PAGES=gh-pages
BASE_URL=/WDEvelopment
JEKYLL_FLAGS=--no-auto --no-server --base-url $(BASE_URL)

all : $(PROJ)

$(PROJ) :
	jekyll $(JEKYLL_FLAGS)

master :
	git add . && git commit
	git push origin master

gh-pages : wde
	cp -rp $(SITE)/* $(GH_PAGES)/ && cd $(GH_PAGES)/
	git add . && git commit
	git push origin gh-pages

.PHONE : all $(PROJ) master gh-pages
