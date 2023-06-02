# AI Chat API

AI Chat API is a RESTful API that provides a convenient way to interact with the AI Chatbot powered by OpenAI's GPT-3.5 model. This repository contains the code and resources necessary to set up and deploy the AI Chat API.

## Installation

To install and set up the AI Chat API, follow these steps:

1. Clone the repository to your local machine using the following command:

```
git clone https://github.com/kuznetsova-anastasiia/ai-chat-api.git
```

2. Navigate to the project directory:

```
cd ai-chat-api
```

3. Install the required dependencies. Run the following command to install the dependencies:

```
npm install
```

4. Set up OpenAI API access:

   - Sign up for an account at the [OpenAI website](https://openai.com/) if you haven't already.
   - Generate an API key from the OpenAI dashboard.
   - Create a file named `.env` in the root directory of the project.
   - Add the following line to the `.env` file, replacing `YOUR_API_KEY` with your actual API key:

   ```text
   API_KEY=YOUR_API_KEY
   ```
   
5. Add a link to you Database to `.env` file:

```
DB_URL=YOUR_DB_URL
```

## Usage

To start the AI Chat API server, run the following command:

```
npm start
```
or
```
npm run start:dev
```

The API server will be running locally on `http://localhost:3000` by default.

## Technologies Used

The Vet App is built using the following technologies:

- **Nest**
- **Sequelize**
- **TypeScript**
- **Socket.io**
- **OpenAi API**

## Contributing

Contributions to the AI Chat API project are welcome! If you have any bug fixes, improvements, or new features to add, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary modifications.
4. Test your changes to ensure they work as expected.
5. Commit your changes and push them to your forked repository.
6. Submit a pull request describing your changes.

Please ensure that your code follows the existing code style and conventions. Also, make sure to update or create tests where applicable to maintain the code quality.

## Contact

Anastasiia Kuznetsova - [mail](mailto:anastasiia.kzntsva@gmail.com)
