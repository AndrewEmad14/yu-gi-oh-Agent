# Yu-Gi-Oh! AI Agent (Duelist Nexus)

An AI-powered Yu-Gi-Oh! assistant and chatbot. This project features a Python-based backend that uses Retrieval-Augmented Generation (RAG) to understand the Yu-Gi-Oh! official rulebook, paired with a stunning, Master Duel-themed React frontend.

## Features

- **Master Duel Aesthetics**: A high-fidelity, responsive frontend built with React, Tailwind CSS, and custom glassmorphism effects to emulate the look and feel of Yu-Gi-Oh! Master Duel.
- **RAG Backend**: A Python backend (using ChromaDB) that ingests the official Yu-Gi-Oh! Rulebook to provide accurate, rule-based answers to user queries.
- **In-Memory Chat History**: The frontend supports multiple chat sessions and tracks conversation history natively in the browser.
- **Dark/Light Mode**: Full support for both light and dark themes using a carefully curated color palette.

## Project Structure

The repository is divided into two main parts:

- `frontend/`: A React application built with Vite and Tailwind CSS.
- `backend/`: A Python API that handles document retrieval and interaction with the AI model.

## Getting Started

### Prerequisites
- Node.js (v16+)
- Python (3.9+)

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```
3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the backend server:
   ```bash
   python main.py
   ```

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS, React Hot Toast
- **Backend**: Python, ChromaDB, Langchain (or similar RAG framework depending on implementation)
- **Deployment**: Local development currently supported.

## License

This project is created for educational and entertainment purposes. Yu-Gi-Oh! is a trademark of Konami.
