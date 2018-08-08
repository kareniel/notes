# Git Flow Cheatsheet

summary of http://nvie.com/posts/a-successful-git-branching-model

Possible branches:

- `master`: HEAD always reflects a production-ready state
- `develop`: HEAD always reflects a state with the latest delivered development changes for the next release
- Feature branches
- Release branches
- Hotfix branches

> When the source code in the develop branch reaches a stable point 
> and is ready to be released, all of the changes should be merged back 
> into master somehow and then tagged with a release number


**Each time when changes are merged back into master, this is a new production release by definition**


---

Feature branches 
================

- May branch off from: `develop`
- Must merge back into: `develop`
- Branch naming convention:
  anything except `master`, `develop`, `release-*`, or `hotfix-*`


**Creating a feature branch**

```
$ git checkout -b myfeature develop
  Switched to a new branch "myfeature"
```

**Incorporating a finished feature on develop**

```
$ git checkout develop
  Switched to branch 'develop'
$ git merge --no-ff myfeature
  Updating ea1b82a..05e9557
  (Summary of changes)
$ git branch -d myfeature
  Deleted branch myfeature (was 05e9557).
$ git push origin develop
```

Release branches 
================

- May branch off from: `develop`
- Must merge back into: `develop` and `master`
- Branch naming convention: `release-*`

**Creating a release branch**

```
$ git checkout -b release-1.2 develop
  Switched to a new branch "release-1.2"
$ ./bump-version.sh 1.2
  Files modified successfully, version bumped to 1.2.
$ git commit -a -m "Bumped version number to 1.2"
  [release-1.2 74d9424] Bumped version number to 1.2
  1 files changed, 1 insertions(+), 1 deletions(-)
```

- Bug fixes may be applied in this branch (rather than on the develop branch) 
- Adding large new features here is strictly prohibited. They must be merged into develop, 
   and therefore, wait for the next big release.

**Finishing a release branch**

1. merge into master

```
$ git checkout master
  Switched to branch 'master'
$ git merge --no-ff release-1.2
  Merge made by recursive.
  (Summary of changes)
```
2. add tag

```
$ git tag -a 1.2
```
3. merge changes made in the release branch back into `develop`.

```
$ git checkout develop
  Switched to branch 'develop'
$ git merge --no-ff release-1.2
  Merge made by recursive.
  (Summary of changes)
```
4. delete the branch

```
$ git branch -d release-1.2
```


Hotfix branches
===============

- May branch off from: `master`
- Must merge back into: `develop` and `master`
- Branch naming convention: `hotfix-*`


**Creating the hotfix branch**

1. checkout from master

```
$ git checkout -b hotfix-1.2.1 master
  Switched to a new branch "hotfix-1.2.1"
```
2. bump the version

```
$ ./bump-version.sh 1.2.1
  Files modified successfully, version bumped to 1.2.1.
$ git commit -a -m "Bumped version number to 1.2.1"
  [hotfix-1.2.1 41e61bb] Bumped version number to 1.2.1
  1 files changed, 1 insertions(+), 1 deletions(-)
```
3. fix the bug and commit the fix

```
$ git commit -m "Fixed severe production problem"
  [hotfix-1.2.1 abbe5d6] Fixed severe production problem
  5 files changed, 32 insertions(+), 17 deletions(-)
```


**Finishing a hotfix branch**

1. update master

```
$ git checkout master
  Switched to branch 'master'
$ git merge --no-ff hotfix-1.2.1
  Merge made by recursive.
  (Summary of changes)
```
2. tag the release

```
$ git tag -a 1.2.1
```
3. does a release branch currently exist?

**if yes**, merge the hotfix into that release branch

```
$ git checkout release
  Switched to branch 'develop'
$ git merge --no-ff hotfix-1.2.1
  Merge made by recursive.
  (Summary of changes)
```

**if not**, merge the hotfix into develop

```
$ git checkout develop
  Switched to branch 'develop'
$ git merge --no-ff hotfix-1.2.1
  Merge made by recursive.
  (Summary of changes)
```
