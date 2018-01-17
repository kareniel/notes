# resize partitions

on ubuntu

assuming your device is called sda:
`sudo fdisk /dev/sda` 

1. use p to list the partitions. Make note of the start cylinders.
2 use d to delete the existing partition
3. use n to create a new primary partition. Make sure its start cylinder is exactly the same as the old /dev/sda1 used to have.
4. use a to toggle the bootable flag on the new /dev/sda1
5. review your changes (p),  use w to write the new partition table to disk. 
You'll get a message telling that the kernel couldn't re-read the partition table because the device is busy, but that's ok.

`sudo reboot`

`sudo resize2fs /dev/sda1`

---

- [https://askubuntu.com/questions/116351/increase-partition-size-on-which-ubuntu-is-installed/116367][1]


[1](https://askubuntu.com/questions/116351/increase-partition-size-on-which-ubuntu-is-installed/116367)