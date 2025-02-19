---
title: "Prometheus"
description: "A desktop CoreXY prototyping printer"
project_name: "Prometheus"
repository: "https://raw.githubusercontent.com/quexeky/prometheus/refs/heads/main/LOGBOOK.md"
---
# Logbook

Total Wakatime Hours so far: 1 (source: [wakatime](https://waka.hackclub.com))

Total research Hours so far: 9 (source: logbook)

Total Hours so far: 10

## Design Requirements
- Core XY
- High bed size/footprint ratio (>75%)
- 
- Decent print quality - suitable for prototyping but doesn't have to be perfect


## Feb 13
Found the project today. I've found a few resources such as 
instructable's [How to design a 3D printer](https://www.instructables.com/How-to-Design-and-Build-a-3D-Printer/)
which I'm going to take a look through for now.

I've been looking at designs, and I'm very tempted by a coreXY. Specifically though a *really* small footprint / volume - 
something that would fit on a desk

Alrigh time to take some apparently ludicrous notes:
- NEMA23 Stepper Motor
    - Run @ 36VDC
    - 800RPM @ 0.5Nm Torque
- 20mm pulley
- 100x100xX bed size
- Assume 200g toolhead (likely excessive)
- This gives:
    - $125ms^{-2}$ acceleration
    - $0.942ms^{-1}$ max speed
    - $0.31mm$ precision (should be improved)

### 9:10pm
Currently taking a look at the Voron0 design in more detail because it looks like the best possible reference for what I want to make

Yeah so they seem to be using NEMA14 / NEMA17 stepper motors for the entire project. They're pretty precise, but the'yre not the most powerful things I've ever seen. I'm somewhat still considering my NEMA23 motors, even though I know that I shouldn't lmao.

Man some of this stuff is so fascinating lmao - 4.2Nm with 1.8 degrees would be so damn cool

Just added the Datasheets folder with the [NEMA23](/Datasheets/NEMA23.pdf) datasheet. I'm thinking that I'll have to design the printer around whatever my printer choice is, because that is kinda the entire point of the printer. SPEED

### 10:39
Adding more references for useful parts

### 11:08
Looking into DigiKey options for motor options. Also adding design requirements

#### References
- Voron0.2 specs https://all3dp.com/2/voron-0-2-review-3d-printer-specs/
- Voron0.2 website https://vorondesign.com/voron0.2
- NEMA14 1.8 https://www.omc-stepperonline.com/nema-14-bipolar-1-8deg-40ncm-56-7oz-in-1-5a-4-2v-35x35x52mm-4-wires-14hs20-1504s
- NEMA24 1.8 https://www.omc-stepperonline.com/s-series-nema-24-bipolar-1-8deg-4-2nm-594-77oz-in-4-2a-60x60x100mm-4-wires-24hs40-4204s
- NEMA23 0.9 https://www.omc-stepperonline.com/nema-23-bipolar-0-9deg-1-26nm-178-4oz-in-2-8a-2-5v-57x57x56mm-4-wires-23hm22-2804s

## Feb 14
Woke up this morning to advice from Adam where he told me to design my toolhead first

Change of plans. Forget going for high speed and quality, I've been talking to one of my
TDU mentors who suggested going for a more specialty build, especially if this is going to 
RMRRF. As a result, I'm going to try going for a really really high bed-to-footprint ratio,
essentially something where the entire footprint is able to be printed on.


## Feb 15
More updates from today. Was out for a fair, bit, but ended up sketching a bit and talking to a guy who knows
a fair bit. I think that I've settled on the idea of essentially going for a really high bed-to-footprint
ratio and then makiong a reasonable desktop printer from that.

Sketch idea: 
![image](https://cdn.hack.pet/slackcdn/f102960383e244d649587c667af417c2.jpg)

Essentially:
- Fairly thin corner supports probably made from lead screws
- Gantry / head is connected to lead screws in a frame (gantry not drawn in) which will not extend outside of the footprint
- Lead screws are z-axis for either entire printer head or bed (probably bed because weight)
- Feet for all lead screws probably with individual motors for ease of assembly


More design ideas:
- Bowden extruder for ease of design?
- Might look into making the head completely removable
- In general I'm going to take inspiration from the Ender 3 for the toolhead / extruder design

Taking a look at this document for toolhead / extrusion system designs: 
https://www.bcn3d.com/documents/The_anatomy_of_an_Extrusion_System_BCN3D_Technologies.pdf

Also watching a few videos [like this one from 3DJake](https://www.youtube.com/watch?v=NMfFirtB1D4)
for more in-depth content on actually designing things

Hours spent today: 3

## Feb 16
Considering the EVA if only because it looks interesting: https://main.eva-3d.page/ 

Actually looking more at the Voron Stealthburner now because apparently it's a lot more vertical
than horizontal.

### 7:59
Been looking at the way that the toolhead itself is designed for the last hour or two. It's got quite a few interesting
components, and I'll be making a sketch of my thoughts in a bit. I have decided that I want to go with a custom
toolhead though

### 10:08
Scratch the sketch. Was busy for a bit between then and now and wasn't really able to do much. Going to go to sleep now.

Total hours researching today: 4

## Feb 17
### 9:16
Scratch everything. I'm going to use a bowden tube for simplicity and because I've found a good hotend/coldend assembly to
use from E3D: https://e3d-online.com/products/v6-all-metal-hotend?variant=40923457683515

STL: https://www.printables.com/model/77449-e3d-v6-hotend-175mm

## Resources
Torque to Force calculator: https://calculator.academy/torque-to-force-calculator/

RPM to linear velocity calculator: https://www.omnicalculator.com/everyday-life/rpm

Degrees to mm converter: https://conversion.website.yandexcloud.net/degrees-to-millimeters.html

Force Calculator: https://www.omnicalculator.com/physics/force

NEMA23 Store Page & Datasheet: https://www.makerstore.com.au/product/elec-nema23-635-ht/

NEMA17 / NEMA23 Torque / Speed curves: https://pages.pbclinear.com/rs/909-BFY-775/images/Data-Sheet-Stepper-Motor-Support.pdf
