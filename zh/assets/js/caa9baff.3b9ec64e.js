"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5832],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||a;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(4137));const a={},o=void 0,l={unversionedId:"unraid-os/release-notes/6.10.2",id:"unraid-os/release-notes/6.10.2",title:"6.10.2",description:"Version 6.10.2 2022-05-27",source:"@site/docs/unraid-os/release-notes/6.10.2.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.10.2",permalink:"/zh/unraid-os/release-notes/6.10.2",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.10.2.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"6.10.1",permalink:"/zh/unraid-os/release-notes/6.10.1"},next:{title:"6.10.3",permalink:"/zh/unraid-os/release-notes/6.10.3"}},s={},u=[{value:"Version 6.10.2 2022-05-27",id:"version-6102-2022-05-27",level:2},{value:"Data Corruption possible with tg3 driver when Intel VT-d is enabled",id:"data-corruption-possible-with-tg3-driver-when-intel-vt-d-is-enabled",level:3},{value:"How to Disable Intel VT-d on HP MicroServer Gen 8 with a E3-1265LV2",id:"how-to-disable-intel-vt-d-on-hp-microserver-gen-8-with-a-e3-1265lv2",level:4},{value:"Security-related Changes",id:"security-related-changes",level:3},{value:"Other Changes",id:"other-changes",level:3},{value:"Change Log vs. Unraid OS 6.10.1",id:"change-log-vs-unraid-os-6101",level:2},{value:"Base distro",id:"base-distro",level:4},{value:"Linux kernel",id:"linux-kernel",level:4},{value:"Management",id:"management",level:4}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"version-6102-2022-05-27"},"Version 6.10.2 2022-05-27"),(0,i.kt)("h3",{id:"data-corruption-possible-with-tg3-driver-when-intel-vt-d-is-enabled"},"Data Corruption possible with tg3 driver when Intel VT-d is enabled"),(0,i.kt)("p",null,"The combination of Linux 5.15 kernel, tg3 driver, and Intel VT-d enabled\nappears to be causing data corruption.\xa0 This has been verified on\nseveral platforms which include a Broadcom NetXtreme Gigabit Ethernet\nNIC (note: there may be others).\xa0 This release includes the following\nworkaround:"),(0,i.kt)("p",null,"Very early in server startup (rc.S) if Intel VT-d is detected enabled,\nthen the script will unconditionally create the file:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/etc/modprobe.d/tg3.conf")),(0,i.kt)("p",null,"with following content:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"blacklist\xa0tg3")),(0,i.kt)("p",null,'Hence by default if VT-d is enabled, which is to say, it has not been\ndisabled in either bios or via kernel "intel',(0,i.kt)("em",{parentName:"p"},'iommu=off", then we are\ngoing to blacklist the tg3 driver on all platforms. What if someone has\na platform where tg3 does not give them any trouble with VT-d enabled?\nIn this case they must create an ',"_","empty")," file on their flash device:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"config/modprobe.d/tg3.conf")),(0,i.kt)("p",null,"When the startup sequence continues it will get to the point where it\nexecutes:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"install\xa0-p\xa0-m\xa00644\xa0/boot/config/modprobe.d/*\xa0/etc/modprobe.d")),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"blank")," tg3.conf file stored on the flash then effectively\nun-blacklists it."),(0,i.kt)("p",null,"There will be users who will lose network connectivity because their NIC\nis blacklisted. If you are running on a problematic platform you should\ngo into your bios and disable VT-d. If this is a platform without issue,\nthen you will need to create the blank tg3.conf file on your flash\nconfig/modprobe.d directory."),(0,i.kt)("p",null,"It may take some time to identify and integrate a proper fix for this\nissue, at which point we will remove the auto-blacklisting code."),(0,i.kt)("h4",{id:"how-to-disable-intel-vt-d-on-hp-microserver-gen-8-with-a-e3-1265lv2"},"How to Disable Intel VT-d on HP MicroServer Gen 8 with a E3-1265LV2"),(0,i.kt)("p",null,"Reboot the server, then:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"During bootup press F9 to enter the bios."),(0,i.kt)("li",{parentName:"ul"},"Once the bios is loaded enter the menu System Options -",">"," Processor\nOptions -",">"," Intel(R) VT-d"),(0,i.kt)("li",{parentName:"ul"},"Set it to disabled"),(0,i.kt)("li",{parentName:"ul"},"Press Esc to get to the top menu again"),(0,i.kt)("li",{parentName:"ul"},"Press F10 to exit the bios and save")),(0,i.kt)("p",null,"The server should now boot again as normal. Hat tip to Community member\n",(0,i.kt)("a",{parentName:"p",href:"https://forums.unraid.net/topic/124108-unraid-os-version-6102-available/#comment-1132042"},"Oceanic for the\ninstructions"),"."),(0,i.kt)("h3",{id:"security-related-changes"},"Security-related Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Firefox browser and has been updated to version 100.0.2 to\naddress a very nasty security vulnerability.\xa0 If you use Firefox we\nalso suggest upgrading on all platforms."),(0,i.kt)("li",{parentName:"ul"},"We fixed an issue where webGUI login could accept a password from a\nuser other than 'root', if that username included the string\n'root'."),(0,i.kt)("li",{parentName:"ul"},'The Linux kernel was updated to 5.15.43 to address a "security\nbypass" vulnerability.')),(0,i.kt)("h3",{id:"other-changes"},"Other Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'On Management Access page, for the "Use SSL/TLS" setting we\nchanged the word "Auto" to "Strict" in the drop-down menu.\xa0 This\nbetter describes the action of this setting.'),(0,i.kt)("li",{parentName:"ul"},"Docker manager now uses Docker label for icons as fallback."),(0,i.kt)("li",{parentName:"ul"},"VM manager now gives the option of using LibVirt networks in\naddition to bridges without having to edit the VM's XML."),(0,i.kt)("li",{parentName:"ul"},"Improved handling of custom SSL certificates."),(0,i.kt)("li",{parentName:"ul"},"[6.10.1]"," Fix regression: support USB flash boot from other than\npartition 1"),(0,i.kt)("li",{parentName:"ul"},"other misc. bug fixes")),(0,i.kt)("h2",{id:"change-log-vs-unraid-os-6101"},"Change Log vs. Unraid OS 6.10.1"),(0,i.kt)("h4",{id:"base-distro"},"Base distro"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"firefox AppImage: version: 100.0.r20220519220738 (CVE-2022-1802\nCVE-2022-1529)")),(0,i.kt)("h4",{id:"linux-kernel"},"Linux kernel"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"version 5.15.43-Unraid (CVE-2022-21499)")),(0,i.kt)("h4",{id:"management"},"Management"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"nginx: avoid appending default port number to redirect URLs"),(0,i.kt)("li",{parentName:"ul"},"nginx: self-signed cert file: accept common name and all alternate\nnames"),(0,i.kt)("li",{parentName:"ul"},"startup: fix multiple network interfaces being assigned the same MAC\naddress"),(0,i.kt)("li",{parentName:"ul"},"startup: blacklist tg3 by default if Intel VT-d is enabled"),(0,i.kt)("li",{parentName:"ul"},"webgui: Management Access: Use SSL/TLS setting: change the word\n'Auto' to 'Strict'"),(0,i.kt)("li",{parentName:"ul"},"webgui: Fixed: smGlue not included when selecting a controller"),(0,i.kt)("li",{parentName:"ul"},"webgui: Fixed: allow share names with embedded ampersand"),(0,i.kt)("li",{parentName:"ul"},"webgui: add LXC terminal support (for LXC Plugin)"),(0,i.kt)("li",{parentName:"ul"},"webgui: Docker Web UI to use Docker label for icons as fallback"),(0,i.kt)("li",{parentName:"ul"},"webgui: VM Manager: support libvirt networks (make libvirt networks\naccessible via gui)"),(0,i.kt)("li",{parentName:"ul"},"webgui: fix issue where 'root' login works with password from\nanother username which includes string 'root'"),(0,i.kt)("li",{parentName:"ul"},"webgui: Update OS page spelling corrction: warninging -",">"," warning"),(0,i.kt)("li",{parentName:"ul"},"webgui: helptext review: minor corrections")))}c.isMDXComponent=!0}}]);