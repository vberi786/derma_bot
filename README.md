# Aurea

## Introduction
Welcome to **Aurea** by **Team Noobz**! This README provides a comprehensive guide to understanding and accessing our project.
![Screenshot 2024-11-10 092412](https://github.com/user-attachments/assets/6e8dc2af-cc29-4319-8afe-1a706940000b)


## Table of Contents
1. [Problem Statement](#problem-statement)
2. [Solution](#solution)
3. [About the Project](#about-the-project)
4. [Tech Stack](#tech-stack)
5. [Application Architecture](#application-architecture)
6. [Current Progress and Future Scope](#current-progress-and-future-scope)
7. [Frontend Deployment](#frontend-deployment)
8. [Backend Deployment](#backend-deployment)
9. [AI Model Deployment](#ai-model-deployment)
10. [Getting Started](#getting-started)
11. [Contact](#contact)

## Problem Statement
Access to quality healthcare is a widespread issue. While urban areas have better facilities, people in small towns often lack access to specialists, leaving skin conditions undiagnosed or improperly treated, which can lead to a dip in self-worth and potential health risks.

## Solution
Introducing **Aurea**—featuring **Dr. Derma**, our AI model that diagnoses skin diseases in seconds from a photo of the affected area. Dr. Derma can provide insights into symptoms, treatment options, and more. Once self-diagnosed, Aurea connects users to top skin specialists, allowing for online consultations without the hassle of travel.

With Aurea, users control their data. Leveraging smart contracts, users' medical data is securely stored. Specialists in need of data for research can access it ethically by paying for usage, regulated by the smart contract.

## About the Project
**Aurea** aims to democratize access to quality dermatological care, particularly for underserved communities. Our mission is to bridge the gap in healthcare access using AI-powered diagnosis and decentralized, secure data storage.

## Tech Stack
This project leverages a range of cutting-edge technologies:
- **Frontend**: Vite, Tailwind CSS, JavaScript
- **Backend**: Node.js, Express, Firebase, WebRTC
- **Database**: MongoDB, IPFS for decentralized data storage
- **AI**: Python, Llama 3 model, LangChain, Langsmith, Streamlit, TensorFlow
- **Smart Contract**: TON

## Application Architecture
Aurea’s architecture is designed for scalability and efficiency:
- **Frontend**: Built with Vite and styled using Tailwind CSS for a responsive, user-friendly experience.
- **Backend**: Node.js and Express manage the API and handle data requests.
- **AI Model**: Deployed separately, accessible via API for diagnosis.
- **Database**: MongoDB stores user and appointment data; IPFS ensures secure, decentralized storage.
- **Smart Contracts**: Ensure ethical and secure data access for research purposes.

## Current Progress and Future Scope
Currently, the following features have been implemented:
- Dr. Derma, the AI model that diagnoses skin diseases
  ![Screenshot 2024-11-10 094343](https://github.com/user-attachments/assets/9dba5c74-f523-43ba-a288-c329cd371916)
![Screenshot 2024-11-10 094150](https://github.com/user-attachments/assets/c4cfe6e2-74ec-4e1a-8afa-4161d0042c22)
![Screenshot 2024-11-10 094117](https://github.com/user-attachments/assets/43b0a3f2-cc97-4d8e-8813-3e919727d874)

- Setting appointments with skincare specialists
  ![Screenshot 2024-11-10 093022](https://github.com/user-attachments/assets/056b9d1a-7134-4836-9232-5080d6013dd4)
![Screenshot 2024-11-10 093000](https://github.com/user-attachments/assets/2625cecf-f8bb-4917-903c-189aa73d660f)

- Online meetings with a skincare specialist
  ![Screenshot 2024-11-10 092814](https://github.com/user-attachments/assets/4f386025-6a13-4e61-b0b2-73a819d45ef0)

- Marketplace that links to the smart contract
  ![Screenshot 2024-11-10 094259](https://github.com/user-attachments/assets/50484960-4651-4c91-82a1-7ee5d31c7be1)


**Future Scope**:
- Implementing a smart contract to give users control over the distribution of their data

## Frontend Deployment
The frontend is deployed at: [https://noobz-1.onrender.com](https://noobz-1.onrender.com)

## Backend Deployment
The backend is deployed at: [https://noobz.onrender.com](https://noobz.onrender.com)

## AI Model Deployment
The AI model is deployed at: [https://dermachatbot-9mcagccpbsnc5xvyfujxom.streamlit.app/](https://dermachatbot-9mcagccpbsnc5xvyfujxom.streamlit.app/)  
The repository for the AI model can be found at: [https://github.com/Harry-231/Derma_chatbot](https://github.com/Harry-231/Derma_chatbot)

## Getting Started
Follow these steps to set up the project locally:

1. **Clone the repository**: 
   ```
   git clone https://github.com/ekas-7/Noobz.git
   ```
2. **Install dependencies**
    ```
   cd frontend
   npm i
   cd ../backend
   npm i
   ```

3. **Set environment variables**
    Configure the required environment variables in a .env file as per project documentation.

4. **Run the application**
    ```
   cd frontend
   npm run dev
   <!-- Open a new terminal instance -->
   cd backend
   npm run start
   ```
