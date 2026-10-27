# QR Code Generator

A simple command-line application that turns a URL entered in the terminal into a QR code image. It also saves the original URL to a text file so it is easy to retrieve later.

## Features

- Prompts for a URL using an interactive terminal prompt.
- Generates a QR code image from the entered text.
- Saves the QR code as `qr_img.png`.
- Saves the entered URL as `URL.txt`.
- Uses Node.js modules and npm packages to handle terminal input and file output.

## Tech Stack

- **Node.js** — runs the application.
- **Inquirer** — collects the URL from the terminal.
- **qr-image** — generates the QR code image.
- **Node.js `fs` module** — writes the generated image and URL to files.

## Example Output

The repository includes an example QR code image:

![Example generated QR code](qr_img.png)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your computer (npm is included with Node.js).

### 1. Clone the repository

```bash
git clone https://github.com/shubhamsingh-07/QR-Code-Generator.git
cd QR-Code-Generator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the application

```bash
node index.js
```

When prompted with `enter URL`, type or paste the URL you want to encode.

## Generated Files

| File | Description |
| --- | --- |
| `qr_img.png` | The QR code image generated from your input. |
| `URL.txt` | A text file containing the URL you entered. |

Both files are written to the project's current working directory and are overwritten when you run the program again.

## How It Works

1. Inquirer prompts you to enter a URL.
2. The application passes that input to `qr-image` to generate a QR code image stream.
3. Node.js writes the image stream to `qr_img.png`.
4. The entered URL is saved to `URL.txt`.

## What This Project Practices

- Building a small command-line application with Node.js.
- Accepting interactive input with an npm package.
- Using a package to generate image output.
- Writing files with Node.js's built-in file-system module.

## Possible Improvements

- Validate the input before generating the QR code.
- Let users choose output filenames.
- Add clearer error handling for file-writing failures.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

**Shubham Singh** · [GitHub Profile](https://github.com/shubhamsingh-07)
