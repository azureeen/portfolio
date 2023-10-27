import { doc, getDoc, increment, updateDoc } from "@firebase/firestore";
import * as config from "./config";
import { getEnv } from "./env";

const db = config.initializeFirebase();
const counterRef = doc(db,'env', getEnv(), 'metrics', 'visits');

/**
 * Increment the number of visitors that have visited the website
 */
export function incrementNbVisitors() {
  return new Promise((resolve, reject) => {
    document.addEventListener('DOMContentLoaded', async function() {
      try {
        // Check if user is already counted in the session
        if (!sessionStorage.getItem('counted')) {
          await updateDoc(counterRef, {
            count: increment(1)
          });
          console.log(getEnv());

          // Mark the user as counted in this session
          sessionStorage.setItem('counted', 'true');
        }
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  });
}


/**
 * Display the counter of visits
 * @returns {Promise<void>}
 */
export async function displayNbVisitors(){
  const docSnap = await getDoc(counterRef)
  if (docSnap.exists()) {
    const countElement = document.getElementById('visitorCounter');
    console.log(docSnap);
    countElement.innerHTML = docSnap.data().count;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

/**
 * This function allows to increment visits counter before displaying it
 * @returns {Promise<void>}
 */
export async function incrementBeforeDisplay() {
  await incrementNbVisitors();
  displayNbVisitors();
}
