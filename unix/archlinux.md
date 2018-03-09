# archlinux

cheatsheet to create a usable archlinux system from a live image.

## partition

assuming the following scheme:

sda1: bootable partition 

sda2: swap (2x size of available ram) 

sda3: logical partition for /mnt/home 



- `fdisk -l` - list devices and partition tables
- `cfdisk` - graphical partition editor (`curses` `fdisk`) 
- `mkfs.ext4 /dev/sda1` - use `mke2fs` to create an ext4 filesystem on `/dev/sda1`
- `mkfs.ext4 /dev/sda3` - use `mke2fs` to create an ext4 filesystem on `/dev/sda1`
- `mkswap /dev/sda2` - set up a Linux swap area on `/dev/sda2`
- `swapon /dev/sda2` - activate the swap that's on  `/dev/sda2`

- `mount /dev/sda1 /mnt` - mount the primary partition 
- `mkdir /mnt/home`
- `mount /dev/sda3 /mnt/home`

## bootstrap

- `pacstrap /mnt base base-devel` - bootstrap the system
- `genfstab /mnt>> /mnt/etc/fstab` - create the fstab file\*

- `arch-chroot /mnt /bin/bash` - change the system root to the Arch Linux installation directory

- `nano /etc/locale.gen` - configure the language settings
- `locale-gen` - activate it

- `nano /etc/locale.conf` - add language to the system `LANG=fr_CA.UTF-8`

- `ln -sf /usr/share/zoneinfo/Canada/Eastern /etc/localtime` - synchronize the zone information
- `hwclock --systohc --utc` - set the time standard

- `passwd` - set root user password

\* used to define how disk partitions, various other block devices, or remote filesystems should be mounted into the filesystem

## hostname + networking

- `nano /etc/hostname` - add a hostname to this file 

- `systemctl enable dhcpcd` - enable the daemon for all network interfaces

## bootloader

- `pacman –S grub os-prober` - initiate the grub installation
- `grub-install /dev/sda` - install the grub boot loader to the hard disk
- `grub-mkconfig –o /boot/grub/grub.cfg` - configure it

- `exit` - exit chroot
- `reboot`
