import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database - PUT, DONE
export const putDb = async (content) => {
  console.log('PUTting data into the database');
  const jateData = await openDB('jate', 1);
  const tx = jateData.transaction('jate', 'readwrite');
  const objectStr = tx.objectStore('jate');
  const req = objectStr.put({ id: 1, value: content });
  const result = await req;
  console.log('Data successfully saved to the database!', result);
};

// console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database - GET, DONE 
export const getDb = async () => {
console.log('GETting data from the database');
const jateData = await openDB('jate', 1);
const tx = jateData.transaction('jate', 'readonly');
const objectStr = tx.objectStore('jate');
const req = objectStr.get(1);
const result = await req; 
console.log('Data successfully saved to the database', result); 
};

// console.error('getDb not implemented');

initdb();
