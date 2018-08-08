# c

## header files

### I/O

- `FILE` `size_t`
- `stdin` `stdout` `stderr`
- `fopen` `fclose`
- `fread` `fwrite`
- `getchar` `putchar` `puts`
- `printf`
- `remove` `rename`
- `EOF` `NULL`

### Signals

- raise() signal() 
- abort() exit() lngjmp()
- kill()

- `SIGABRT` - abort
- `SIGFPE` - floating point exception
- `SIGILL` - illegal instruction
- `SIGINT` - interrupt
- `SIGSEGV` - segmentation violation, invalid memory access
- `SIGTERM` - terminate

### POSIX sockets/berkeley sockets

- sys/socket.h - functions & data structures
- netinet/in.h - addresses & port numbers
- sys/un.h - local addresses
- arpa/inet.h - functions to manipulate numeric IP addresses
- netdb.h - functions to translate protocol & host names into numeric addresses

`int socket(domain, type, protocol)`  

- create an endpoint for communication and returns a file descriptor for the socket
- return -1 if an error occurred

`int bind(sockfd, my_addr, addrlen)`

- assign a socket to an address
- must be performed before the socket can accept connections to other hosts
- return 0 on success and -1 if an error occurred

`int listen(sockfd, backlog)`

- only necessary for the stream-oriented (connection-oriented) data modes
  - i.e. for socket types (SOCK_STREAM, SOCK_SEQPACKET)
- backlog is an integer representing the number of pending connections that 
  can be queued up at any one time


## References

- [C POSIX Library (Wikipedia)](https://en.wikipedia.org/wiki/C_POSIX_library)
