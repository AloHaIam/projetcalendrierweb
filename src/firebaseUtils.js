import { collection, addDoc, updateDoc, deleteDoc, getDocs, doc } from "firebase/firestore"; 
import { db } from './index.js'; // Assurez-vous que le chemin est correct

// Obtenir tous les événements
export const getEvents = async () => {
  const eventsCollection = collection(db, "events");
  const eventSnapshot = await getDocs(eventsCollection);
  const eventList = eventSnapshot.docs.map(doc => doc.data());
  return eventList;
};

// Ajouter un nouvel événement
export const addEvent = async (newEvent) => {
  const eventsCollection = collection(db, "events");
  const eventWithDates = {
    ...newEvent,
    start: new Date(newEvent.start),
    end: new Date(newEvent.end),
  };
  await addDoc(eventsCollection, eventWithDates);
};

// Mettre à jour un événement existant
export const updateEvent = async (eventId, updatedEvent) => {
  const eventRef = doc(db, "events", eventId);
  await updateDoc(eventRef, updatedEvent);
};

// Supprimer un événement
export const deleteEvent = async (eventId) => {
  const eventRef = doc(db, "events", eventId);
  await deleteDoc(eventRef);
};
