# iTunes

iTunes stores its library in two files:

1. "iTunes Library" ("iTunes Library.itl" on Windows) a binary file in an undocumented format
2. "iTunes Library.xml" (or "iTunes Music Library.xml") a UTF-8 XML file with a simple plist schema.

The default library directory is:

  - ~/Music/iTunes on the Mac
  - ~/My Music/iTunes on Windows

## Binary

The binary format is not just undocumented, but deliberately obfuscated.


## XML

Within the library, there's an entry for each track (a dict, in the plist format), which contains (each a key with that name followed by a string value, in the plist format):

1. a Location (a canonical, absolute path, converted into NFD-form (decomposed) Unicode, then made into a localhost file URL with an idiosyncratic version of URL-encoding)
2. a Persistent ID (stored as a 16-character hex string.)
  ie: "file://localhost/Volumes/Music/iTunes/iTunes%20Media/Compilations/track.mp3"

The final section of the library contains the playlist metadata.


In some cases, the library files are actually not valid XML. 
The problem seems to be the way iTunes writes Unicode characters which are invalid.


---


- [Hacking iTunes][https://www.xml.com/pub/a/2004/11/03/itunes.html]
- [XML Document Type Declaration][http://www.apple.com/DTDs/PropertyList-1.0.dtd]
- [iTunes Music Library page on fileformats.archiveteam.org][http://fileformats.archiveteam.org/wiki/ITunes_Music_Library]
- [Tools for iTunes Libraries][https://github.com/josephw/titl]
- [picardplugins wiki][https://code.google.com/archive/p/picardplugins/wikis/LibraryFile.wiki]
- [Play higher rated songs more often][https://www.jwz.org/blog/2013/12/implementing-play-higher-rated-songs-more-often-in-itunes-11/]
- [Notes on the iTunes xml format][http://search.cpan.org/~dinomite/Mac-iTunes-Library-0.9/lib/Mac/iTunes/Library/XML.pm#NOTES_ON_iTUNES_XML_FORMAT]
