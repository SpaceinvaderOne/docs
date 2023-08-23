"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9725],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,c=u["".concat(s,".").concat(m)]||u[m]||h[m]||o;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(4137));const o={},i="USB Flash Drive Preparation",l={unversionedId:"legacy/FAQ/usb-flash-drive-preparation",id:"legacy/FAQ/usb-flash-drive-preparation",title:"USB Flash Drive Preparation",description:"USB Flash Drives",source:"@site/docs/legacy/FAQ/usb-flash-drive-preparation.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/usb-flash-drive-preparation",permalink:"/es/legacy/FAQ/usb-flash-drive-preparation",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/usb-flash-drive-preparation.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Understanding SMART Reports",permalink:"/es/legacy/FAQ/understanding-smart-reports"},next:{title:"Contribute",permalink:"/es/category/contribute"}},s={},p=[{value:"USB Flash Drives",id:"usb-flash-drives",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Windows XP",id:"windows-xp",level:3},{value:"Windows Vista and Windows 7",id:"windows-vista-and-windows-7",level:3},{value:"MacOS X",id:"macos-x",level:3},{value:"Booting Unraid Server",id:"booting-unraid-server",level:2},{value:"If the Flash will not boot, read over the following tips",id:"if-the-flash-will-not-boot-read-over-the-following-tips",level:2}],d={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usb-flash-drive-preparation"},"USB Flash Drive Preparation"),(0,r.kt)("h2",{id:"usb-flash-drives"},"USB Flash Drives"),(0,r.kt)("p",null,"-","-","-","-","- There is now an USB Creator tool\nfrom Limetech, for both Windows and macOS that users are encouraged to\nuse. The tool can be found ",(0,r.kt)("a",{parentName:"p",href:"https://unraid.net/download"},"here.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"-","-","-","-","- Important version note: This document is no longer for\n",(0,r.kt)("strong",{parentName:"p"},"WINDOWS")," users. In general, you should use ",(0,r.kt)("a",{parentName:"p",href:"https://unraid.net/download"},"Unraid Server\nInstallation")," instead. With the advent of\nthe all-in-one releases (as of v4.6 Final), a ",(0,r.kt)("strong",{parentName:"p"},"make_bootable.bat"),"\nbatch installation file is included, that replaces the use of the\n",(0,r.kt)("strong",{parentName:"p"},"syslinux")," utility in preparing the flash drives for booting Unraid.\nThe instructions below do still work, and are necessary for installing\nversions of Unraid earlier than v4.6 Final, and for preparing a flash\ndrive on a Mac. And there is still value in the advanced troubleshooting\ntips below.",">"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The Unraid Server OS is designed to be installed on, and boot from a USB\nFlash storage device, 512MB or larger. Use a high quality Flash drive\nfrom reputable manufacturers such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lexar"),(0,r.kt)("li",{parentName:"ul"},"PNY"),(0,r.kt)("li",{parentName:"ul"},"Samsung"),(0,r.kt)("li",{parentName:"ul"},"Kingston"),(0,r.kt)("li",{parentName:"ul"},"And many more")),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("h3",{id:"windows-xp"},"Windows XP"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," Plug the Flash into your PC and re-format it using Windows\n(right-click the Flash under ",(0,r.kt)("strong",{parentName:"p"},"My Computer")," and select ",(0,r.kt)("strong",{parentName:"p"},"Format"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("strong",{parentName:"li"},"File system"),", select ",(0,r.kt)("strong",{parentName:"li"},"FAT32")),(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("strong",{parentName:"li"},"Volume label"),", enter ",(0,r.kt)("strong",{parentName:"li"},"UNRAID")," (exactly 6 capital letters)"),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Quick Format")," and click ",(0,r.kt)("strong",{parentName:"li"},"Start")),(0,r.kt)("li",{parentName:"ul"},"For many, the above steps were all that was necessary to format the\ndrive. For others, selecting a file system of ",(0,r.kt)("strong",{parentName:"li"},"FAT")," or ",(0,r.kt)("strong",{parentName:"li"},"FAT16"),"\nwas necessary, and others found that formatting it with the ",(0,r.kt)("strong",{parentName:"li"},"HP\nFlash Formatter Tool")," was required, or even other steps. If you\ndetermine that the Windows formatting did not succeed in creating a\nbootable USB drive, then see the Advanced tips at the bottom.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2")," Download the ",(0,r.kt)("strong",{parentName:"p"},"syslinux")," tool from the ",(0,r.kt)("a",{parentName:"p",href:"http://lime-technology.com/download/"},"Lime Tech\ndownload")," page, and extract\n",(0,r.kt)("strong",{parentName:"p"},"syslinux.exe")," to a simple directory, for example, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"c:\\")),", and then\nrun it by clicking on ",(0,r.kt)("strong",{parentName:"p"},"Start")," / ",(0,r.kt)("strong",{parentName:"p"},"Run"),". In the dialog box, enter:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"c:\\syslinux.exe\xa0-ma\xa0f:")),(0,r.kt)("p",null,"If necessary, change the directory from ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"c:\\"))," to whatever directory\nyou downloaded ",(0,r.kt)("strong",{parentName:"p"},"syslinux")," to, and change the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"f:"))," to use whatever\ndrive letter that Windows mounted your Flash on."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"syslinux")," tool will create a hidden system file named\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ldlinux.sys"))," on the Flash and make the drive bootable. The latest\nversion and a complete distribution of ",(0,r.kt)("strong",{parentName:"p"},"syslinux")," is available\n",(0,r.kt)("a",{parentName:"p",href:"http://syslinux.zytor.com/"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3")," Download the latest ",(0,r.kt)("a",{parentName:"p",href:"http://lime-technology.com/download"},"Unraid\nServer"),", and extract the files from\nthe zip archive to your Flash. When extracting the files, make sure that\nthe option to preserve the folder structure is selected. There is a\n",(0,r.kt)("strong",{parentName:"p"},"config")," folder with initial configuration files, that needs to be\ncorrectly extracted. If done correctly, you should see ",(0,r.kt)("strong",{parentName:"p"},"bzroot")," and\n",(0,r.kt)("strong",{parentName:"p"},"bzimage")," on the flash drive, plus a ",(0,r.kt)("strong",{parentName:"p"},"config")," folder containing\nfiles such as ",(0,r.kt)("strong",{parentName:"p"},"network.cfg")," and ",(0,r.kt)("strong",{parentName:"p"},"ident.cfg"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4")," Click on the ",(0,r.kt)("strong",{parentName:"p"},"Safely Remove Hardware")," tool tray icon and\nselect your Flash drive to be safely removed."),(0,r.kt)("h3",{id:"windows-vista-and-windows-7"},"Windows Vista and Windows 7"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," Plug the Flash into your PC and re-format it using Windows\n(Right-Click the Flash under ",(0,r.kt)("strong",{parentName:"p"},"Computer")," and select ",(0,r.kt)("strong",{parentName:"p"},"Format"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("strong",{parentName:"li"},"File system"),", leave it as ",(0,r.kt)("strong",{parentName:"li"},"Default")),(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("strong",{parentName:"li"},"Volume label"),", enter ",(0,r.kt)("strong",{parentName:"li"},"UNRAID")," (exactly 6 capital letters)"),(0,r.kt)("li",{parentName:"ul"},"Check the ",(0,r.kt)("strong",{parentName:"li"},"Quick Format")," box and click ",(0,r.kt)("strong",{parentName:"li"},"Start"))),(0,r.kt)("p",null,"If you determine that the Windows formatting did not succeed in creating\na bootable USB drive, then see the Advanced tips at the bottom."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2")," Download the latest ",(0,r.kt)("a",{parentName:"p",href:"http://lime-technology.com/download"},"Unraid\nServer"),", and extract the files from\nthe zip archive to your Flash."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3")," On the Flash drive, Right-Click on ",(0,r.kt)("strong",{parentName:"p"},"make_bootable.bat")," and\nselect ",(0,r.kt)("strong",{parentName:"p"},"Run as administrator"),". Press any key to continue."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4")," The process takes only a moment to complete. You can then\nclose any open windows and eject the Flash drive."),(0,r.kt)("h3",{id:"macos-x"},"MacOS X"),(0,r.kt)("p",null,"You'll need to download the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://unetbootin.sourceforge.net"},"unetbootin")," - installs Unraid on\nyour flash drive for you"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.kernel.org/pub/linux/utils/boot/syslinux/"},"syslinux")," - a\ncollection of linux tools that will allow you to make the drive\nbootable"),(0,r.kt)("li",{parentName:"ul"},"Unraid - don't unzip it",".","..")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Plug in your USB Flash drive and format it using Disk Utility.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open Disk Utility (Applications -",">"," Utilities-",">"," Disk Utility) and\nchoose your device from the list on the left - note: In recent\nversions of macOS you will need to select View ",">",' Show All Devices.\nPlease make sure to read carefully to know when to select "Device"\nor "Partition"'),(0,r.kt)("li",{parentName:"ul"},"Select Partition"),(0,r.kt)("li",{parentName:"ul"},"Choose Partition Layout: 1 Partition"),(0,r.kt)("li",{parentName:"ul"},"Call it 'UNRAID' (no spaces, all caps)"),(0,r.kt)("li",{parentName:"ul"},"Click Options and make sure Master Boot Record is selected"),(0,r.kt)("li",{parentName:"ul"},"Click Apply and your disk will format")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Verify the new partition")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Choose the UNRAID partition from the list on the left"),(0,r.kt)("li",{parentName:"ul"},"Select First Aid and Verify Disk"),(0,r.kt)("li",{parentName:"ul"},'Check the "Show Details" box and get the device path for your\ndisk, ex: /dev/disk2s1'),(0,r.kt)("li",{parentName:"ul"},"Unmount the ",(0,r.kt)("strong",{parentName:"li"},"partition"),' by clicking "Unmount" in the top menu'),(0,r.kt)("li",{parentName:"ul"},"leave Disk Utility open, you'll need it again")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Make the partition Bootable")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open Terminal (Applications -",">"," Utilities -",">"," Terminal)"),(0,r.kt)("li",{parentName:"ul"},"Now you'll need the raw disk device name.. so if your partition\ndevice path was /dev/disk2s1, the raw device name is /dev/rdisk2,\nbasically you drop the s1 off the end (that's the partition number)\nand add in a r before disk"),(0,r.kt)("li",{parentName:"ul"},"Type the following command, substituting ",(0,r.kt)("inlineCode",{parentName:"li"},"<device>"),"{=html} for your\nraw deivce name ex: /dev/rdisk2 and press enter")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fdisk\xa0-e\xa0``<device>"),"{=html}"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"At the ",">"," prompt type the following and press enter between each")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"f\xa01"),"\\\n",(0,r.kt)("inlineCode",{parentName:"p"},"write"),"\\\n",(0,r.kt)("inlineCode",{parentName:"p"},"exit")),(0,r.kt)("p",null,"Note: if you get an error about the device not being available for\nwriting, ensure you have Unmounted the partition in Disk Utility"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unmount the partition again in Disk Utility (the above command will\ncause it to be remounted)"),(0,r.kt)("li",{parentName:"ul"},"Unzip/tar your syslinux download (you can leave it in the Downloads\nfolder"),(0,r.kt)("li",{parentName:"ul"},"cd to that folder in terminal by typing the following (you may need\nto change the version number to match your download)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cd\xa0~/Downloads/syslinux-4.05/mbr")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install the bootable MBR on your flash drive with the following\ncommand (again substituting ",(0,r.kt)("inlineCode",{parentName:"li"},"<device>"),"{=html} for your raw device\nname)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dd\xa0conv=notrunc\xa0bs=440\xa0count=1\xa0if=mbr.bin\xa0of=``<device>"),"{=html}"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Install Unraid on your prepared Flash Drive")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change the extension of your Unraid download from zip to iso"),(0,r.kt)("li",{parentName:"ul"},"Open unetbootin (it will need your password)"),(0,r.kt)("li",{parentName:"ul"},"Choose Disk Image at the bottom and browse for your Unraid iso"),(0,r.kt)("li",{parentName:"ul"},"Choose the device path for your partition (it's probably already\nselected)"),(0,r.kt)("li",{parentName:"ul"},"Click OK")),(0,r.kt)("p",null,"Note: if you get an error about overwriting menu.c32, click Yes To All"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When it finishes, you can eject your USB Flash Drive and put it in\nyour Unraid server and power it up")),(0,r.kt)("p",null,"I Think this would work with Windows, Linux versions also. So if any one\nhas Windows or Linux can you try this and write here if it works there\nalso."),(0,r.kt)("h2",{id:"booting-unraid-server"},"Booting Unraid Server"),(0,r.kt)("p",null,"Safely remove/eject the Flash from your PC and plug it into your server.\nPower up your server and see if it immediately boots (with some\nmotherboards it will). If it does not boot to the Unraid boot screen\nthat displays a choice of starting Unraid or Memtest, reboot your server\nand enter the BIOS setup. Navigate to the appropriate screen(s) and\nselect your USB Flash device as the boot device. In some BIOS, the flash\ndrive may show up in the list of hard disks, and you may have to select\nit there. Save your BIOS settings and try to boot the Flash. Be aware\nthat some motherboards will change the boot order when you add hard\ndrives, and you will have to return to these same BIOS screens to\nre-select your flash drive."),(0,r.kt)("p",null,"Note: You may need to check\n",(0,r.kt)("a",{parentName:"p",href:"http://www.lime-technology.com/joomla/unraid-os"},"here")," for more ",(0,r.kt)("em",{parentName:"p"},"BIOS\nSetup Tips")," and ",(0,r.kt)("em",{parentName:"p"},"Other BIOS Suggestions"),". For machines with an AMI BIOS,\ncheck\n",(0,r.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=2302.msg17664#msg17664"},"here"),".\nFor more general BIOS suggestions on getting a machine to boot the USB\nflash drive, check\n",(0,r.kt)("a",{parentName:"p",href:"http://www.weethet.nl/english/hardware_bootfromusbstick.php"},"here"),",\nnear the bottom of the page. Also see\n",(0,r.kt)("a",{parentName:"p",href:"/unraid-os/manual/getting-started.md#advanced-bios-configuration-guide"},"here")),(0,r.kt)("h2",{id:"if-the-flash-will-not-boot-read-over-the-following-tips"},"If the Flash will not boot, read over the following tips"),(0,r.kt)("p",null,"Unfortunately, some motherboards and BIOS versions are very picky about\nthe geometry or configuration of the USB flash drive. Some combinations\nof motherboard, BIOS, and flash drive do not work, or only work after\nmore advanced 'modifications'. The following tips are what users have\nfound to work, in different situations. If one does not work for you,\ntry another."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'If your flash drive had pre-installed "U3" software, it will need\nto be removed before you format and install Unraid on it. U3\nUn-Install software is available\n',(0,r.kt)("a",{parentName:"p",href:"http://www.u3.com/uninstall/"},"here"),". A U3 removal tool specific to\nSanDisk drives can be found\n",(0,r.kt)("a",{parentName:"p",href:"http://u3.sandisk.com/launchpadremoval.htm"},"here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Some instructions for loading ",(0,r.kt)("strong",{parentName:"p"},"syslinux"),' on your flash drive leave\noff the "',(0,r.kt)("strong",{parentName:"p"},"-ma"),'" options of the command. If your flash drive does\nnot have a preloaded master boot record and a partition marked as\n"active", then it is unlikely to boot unless you use the ',(0,r.kt)("strong",{parentName:"p"},"-ma"),"\noptions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Try formatting the USB drive as FAT instead of FAT32")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You may need to use the ",(0,r.kt)("strong",{parentName:"p"},"HP formatting tool")," to make your flash\ndrive bootable on your BIOS. It sets the Cylinders/Heads/Sector\ngeometry of a flash drive to an alternate set of geometry values.\nThe alternate geometry will often will make it possible to use your\nflash drive as a boot disk when your BIOS does not work with the\nexisting geometry. For more info, see\n",(0,r.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=359.0"},"here")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=366.0"},"here")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=2703.0"},"here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Apparently, there is more than one version of the ",(0,r.kt)("strong",{parentName:"p"},"HP format\ntool"),". The version of the ",(0,r.kt)("strong",{parentName:"p"},"HP USB Format Tool")," that works best\nhas a file name of ",(0,r.kt)("strong",{parentName:"p"},"SP27213.exe"),". Some have had problems with the\nversion named ",(0,r.kt)("strong",{parentName:"p"},"SP27608.exe"),". (eg. Sandisk 16GB Cruzer Contour &\nAmicroe 32GB). HP seems to have removed both from their downloads\nsection of their website, but Google ",(0,r.kt)("strong",{parentName:"p"},"HP SP27213.exe")," and you\nshould be able to find it easily.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If it appears as if the flash drive tries to boot, but hangs while\ndecompressing the ",(0,r.kt)("strong",{parentName:"p"},"bzroot")," or ",(0,r.kt)("strong",{parentName:"p"},"bzimage")," files on the flash, it\nis possible that either the ",(0,r.kt)("strong",{parentName:"p"},"bzroot")," or ",(0,r.kt)("strong",{parentName:"p"},"bzimage")," file is\ncorrupt or incomplete. This could happen if you did not safely eject\nthe flash drive, after copying the files to it when it was plugged\ninto your PC. The file would only have been partially written to the\nflash drive.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If it appears as if the flash drive tries to boot, but only gets\npart way before hanging, you may need to add additional options to\nyour ",(0,r.kt)("strong",{parentName:"p"},"syslinux.cfg")," file on your flash drive to boot your\nmotherboard.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If it appears as if the flash drive gets part way through the boot\nprocess but stops when loading ",(0,r.kt)("strong",{parentName:"p"},"bzroot"),", you may need to use the\nlatest version of ",(0,r.kt)("strong",{parentName:"p"},"syslinux")," in the\n",(0,r.kt)("a",{parentName:"p",href:"http://lime-technology.com/dnlds"},"downloads")," folder at\nLime-Technology. Use of ",(0,r.kt)("strong",{parentName:"p"},"syslinux version 3.63")," in combination\nwith the ",(0,r.kt)("strong",{parentName:"p"},"-ma")," option was the solution in ",(0,r.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=1176.msg15666#msg15666"},"this\nthread"),".\n(After downloading ",(0,r.kt)("a",{parentName:"p",href:"http://download.lime-technology.com/syslinux%203.63.zip"},"syslinux\n3.63.zip"),",\nextract ",(0,r.kt)("strong",{parentName:"p"},"syslinux.exe")," from the zip file.) A number of users\nupgrading from a v4.2 version to a v4.3 version have found that the\nnew ",(0,r.kt)("strong",{parentName:"p"},"syslinux")," is necessary, even though their flash drive had\nworked fine with v4.2.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If it appears as if the flash drive gets part way through the boot\nprocess but reboots when loading ",(0,r.kt)("strong",{parentName:"p"},"bzroot"),", one user found that he\nfixed it be replacing his graphics card with an older (possibly more\nbasic) graphics card.\n",(0,r.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=4769"},"1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A user has created another procedure based on the ",(0,r.kt)("strong",{parentName:"p"},"makebootfat"),"\ntool. This procedure seems especially useful for newer Intel boards,\nsuch as boards based on the P965, P35, and P45 chipsets and their G\nvariants. See\n",(0,r.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=2407.0"},"this"),"\npost. It worked when nothing else would, on his Intel P965-based\nboard.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Also see\n",(0,r.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=922.0"},"this"),"\nthread (uses a Knoppix installation or Live CD), if you have a board\nthat will only boot from a flash drive as a USB-ZIP drive. Similar\ninstructions, using Ubuntu or similar, can be found here:\n",(0,r.kt)("a",{parentName:"p",href:"http://www.pendrivelinux.com/booting-linux-from-usb-zip-on-older-systems/"},"http://www.pendrivelinux.com/booting-linux-from-usb-zip-on-older-systems/"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"And last of all, try upgrading the BIOS of your motherboard. A later\nBIOS may have better support for booting from USB."))))}h.isMDXComponent=!0}}]);