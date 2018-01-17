# inodes

- list number of files

`for i in /*; do echo $i; sudo find $i |wc -l; done`

- example output:

```
/bin
119
/sys
9293
/tmp
1
/usr
10583
```

- when one folder seems to take a lot longer, dig deeper into that one:

`for i in /var/*; do sudo echo $i; sudo find $i |wc -l; done`

if the directory is protected, you can do ` sudo sh -c 'for i in...' ` 


- ncdu



---

- [http://blog.scoutapp.com/articles/2014/10/08/understanding-disk-inodes][1]

[1]: http://blog.scoutapp.com/articles/2014/10/08/understanding-disk-inodes
