
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configurações do projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyARAI_ommiHGJ8EkDzK_osyVUCPCOqPnQo",
  authDomain: "studyflow-1f070.firebaseapp.com",
  projectId: "studyflow-1f070",
  storageBucket: "studyflow-1f070.firebasestorage.app",
  messagingSenderId: "339018554562",
  appId: "1:339018554562:web:5633304dfa0b3aeccaf65b"
};

// Inicializa o Firebase
const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApp();

// Autenticação dos usuários
export const auth = getAuth(app);

// Banco de dados Firestore
export const db = getFirestore(app);
