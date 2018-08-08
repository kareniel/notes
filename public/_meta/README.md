# Meta

The goal of this section is to take notes on the design of this knowledge base.

---

## Folder root

Create a `README.md` file at the root of folders to server as the folder's
index.

## Redirects

**TLDR**: Never rename files. Create a new file, and link to it using the 
`redirect` field in the YAML frontmatter.

- Since I want this project to live as a website and as such, to be index by
  search engines, it is important that file names are not renamed. File names
  are used to generate URLs, which means renaming files would also break links.
- To fix this issue, a `redirect` field can be added to the YAML frontmatter of
  a file that needs to be moved with a reference to the new location.


