const puppeteer = require('puppeteer-extra');
const args = process.argv;
const commandLineArguments = args.slice(2);
const _link = commandLineArguments[0]

const init = async (link) => {
    //console.log('Requested inspect link:', link);
    if (!link.includes("steam://rungame/730/76561202255233023/+csgo_econ_action_preview"))
        return console.log("Not valid link")
    const browser = await puppeteer.launch({
        headless: "new"
    });
    const page = await browser.newPage();

    await page.goto('https://csfloat.com/')

    const response = await page.evaluate(async (link) => {
        const url = `https://api.csfloat.com/?url=${link}`;
        const fetchResponse = await fetch(url);
        const jsonResponse = await fetchResponse.json();
        return jsonResponse;
    }, link);

    await browser.close();

    const i = response.iteminfo;
    // console.log(i) // debug

    if (i && response.iteminfo.full_item_name.includes("Gloves")) {
        console.log(`%s`, i.full_item_name)
        return console.log(`!gengl ${i.defindex} ${i.paintindex} ${i.paintseed} ${i.floatvalue} 0 0 0 0 0 0 0 0 0 0 0 0`)
    }

    if (i) {
        let stickerString = [];
        if (i && i.stickers) {
            const stckr = i.stickers;
            for (let a = 0; a < stckr.length; a++) {
                var stickerId = 0;
                var stickerWear = 0;
                if (stckr[a].stickerId)
                    stickerId = stckr[a].stickerId;
                if (stckr[a].stickerWear)
                    stickerWear = stckr[a].stickerWear;

                //stickerString += `${stickerId} ${stickerWear}`;
                stickerString.push(stickerId);
                stickerString.push(stickerWear);
            }
        }
        // Check the number of words in the string
        if (stickerString.length < 8) {
            // If there are fewer than 8 words, add "0" words to reach 8 words
            const padding = Array.from({ length: 8 - stickerString.length }, () => '0');
            stickerString = stickerString.concat(padding).join(' ');
        } else stickerString = stickerString.join(" ");
        console.log(`%s`, i.full_item_name)
        return console.log(`!gen ${i.defindex} ${i.paintindex} ${i.paintseed} ${i.floatvalue} ${stickerString} 0 0 0 0`)
    }
    else return console.log("Invalid Inspect Link Structure");
}

init(_link)

// !gen <defindex> <paintindex> <paintseed> <floatvalue> <stickerId[0]> <stickerwear[0]> .... 0 0 0 0 0