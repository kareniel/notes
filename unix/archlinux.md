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

## first packages


- `xorg-server` - x server
- `xterm` - standard terminal emulator for the X Window System
- `xorg-xinit` - provides both xinit, startx, and a default xinitrc configuration file.

- `git`
- `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash` - nvm

- [auto login](https://wiki.archlinux.org/index.php/Getty#Automatic_login_to_virtual_console)

```bash
if [ "$(tty)" = "/dev/tty1" ]; then
  startx && exit
fi
```

## archiso


### setup

- `pacman -S archiso` - install archiso
- `mkdir archon`
- `cp -r /usr/share/archiso/configs/releng/* archon` - use the `releng` profile to create a fully customized live version of Arch Linux, pre-installed with all your favorite programs and configurations
- `cd archon`
- `mkdir -p ./airootfs/etc/skel` - When `/root/customize_airootfs.sh` is executed and a new user is created, the files from the `/etc/skel` directory will automatically be copied over to the new home folder, permissions set right.

### customize

- `pacman -S xorg-xinit`
- `cp /etc/X11/xinit/xinitrc ~/.xinitrc`
- `ln -s /usr/lib/systemd/system/lxdm.service ~/archlive/airootfs/etc/systemd/system/display-manager.service` -  enable your display manager's systemd service

- `./packages.both`, `./packages.i686`, `./packages.x86_64` - where you list, line by line, the packages you want to have installed
- `./airootfs` - "archiso root filesystem" 
  -  any files you place within this directory will be copied over on boot-up.
  - `./airootfs/root/customize_airootfs.sh` - generally, every administrative task that you would normally do after a fresh install **except for package installation** can be scripted here
- **If you want to use a window manager in the Live CD then you must add the necessary and correct video drivers, or the WM may freeze on loading.**
