import { doc, getDoc, increment, updateDoc } from "@firebase/firestore";
import * as config from "./config";
import { getEnv } from "./env";

export function countVisitors() {
  const db = config.initializeFirebase();

  document.addEventListener('DOMContentLoaded', async function() {
    const counterRef = doc(db,'env', getEnv(), 'metrics', 'visits');

    await updateDoc(counterRef, {
      count: increment(1)
    }).then(async DocumentSnapshot => {
      const docSnap = await getDoc(counterRef)
      if (docSnap.exists()) {
        const countElement = document.getElementById('visitorCounter');
        countElement.innerHTML = docSnap.data().count;
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    })
      .catch(error => {
        console.log("Error Updating : " + error);
      })

    console.log(getEnv());

  });
}
