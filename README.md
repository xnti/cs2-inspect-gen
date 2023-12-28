
# CS:2 Inspect Gen

## Overview
This Node.js script uses Puppeteer to interact with the CS:2 item inspection service provided by CSFloat. It fetches item information like float values, paint index, and sticker details for CS:2 items given a valid Steam inspection link. And generates a `!gen` , `!gengl` command to use in inspect servers

## Installation

### Prerequisites
- Node.js
- Puppeteer

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/xnti/cs2-inspect-gen.git
   ```
2. Navigate to the cloned directory:
   ```bash
   cd cs2-inspect-gen
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
To use the script, run the following command with a valid CS:2 item inspection link:
```bash
node main.js <CS2 Inspect Link>
```

### Examples
```bash
node main.js steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S76561199562364729A35091656563D16198327228670045117
```

## How It Works
- The script takes a CS:2 item inspection link as an argument.
- It verifies if the link is valid and specifically for CS:2 items.
- Using Puppeteer, it navigates to the CSFloat website and makes an API call to fetch item details.
- The script then processes the response to extract and display information such as the full item name, float value, paint index, and sticker details.
- For items with stickers, it calculates sticker IDs and wear values.

## Notes
- Ensure the provided Steam item inspection link is correct and follows the standard format used in CS:2.
- The script currently supports items with stickers, providing detailed information about each sticker on the item.

## Contributing
Contributions to improve the script or add new features are welcome. Please submit pull requests for any changes.

## License
- MIT