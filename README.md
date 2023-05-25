# RealmeBot API

The RealmeBot API is an API that provides information about Realme devices. It allows users to search for Realme devices by codenames or model names.

## Overview

The RealmeBot API is built using Node.js and Express.js. It utilizes a JSON data file containing information about various Realme devices, including their series, codenames, and models. 

## Installation

To install and run the RealmeBot API on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/agam778/realmebot-api.git`
2. Navigate to the project directory: `cd realmebot-api`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. The API will be available at `http://localhost:8080`

## Usage

The RealmeBot API provides the following endpoints:

- `GET /`: Retrieves the entire JSON data containing information about Realme devices.
- `GET /:query`: Searches for Realme devices based on the provided query. The query can be a codename or series or model name.

The API is publically available at https://realmebotapi-1-e2272932.deta.app/.

## Contributing
You can add more devices/codenames in the [`data.json`](./data.json) file. Please make sure to follow the existing format. 

## License
This project is licensed under the [GNU General Public License v3.0](./LICENSE).