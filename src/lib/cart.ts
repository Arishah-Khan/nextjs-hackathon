import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

// Function to add an item to the cart
export const addItemToCart = async (item: { name: string, price: number }) => {
  try {
    const cartRef = collection(db, "cartItems"); // Reference to the "cartItems" collection in Firestore
    const docRef = await addDoc(cartRef, item); // Add the item to the cart collection
    console.log("Item added with ID: ", docRef.id); // Log the added document ID
  } catch (error) {
    console.error("Error adding item to cart: ", error); // Log any errors
  }
};

// Function to fetch all cart items from Firestore
export const fetchCartItems = async () => {
  try {
    const cartRef = collection(db, "cartItems"); // Reference to the "cartItems" collection
    const querySnapshot = await getDocs(cartRef); // Fetch all documents from the collection
    const cartItems: any[] = [];

    querySnapshot.forEach((doc) => {
      cartItems.push({ id: doc.id, ...doc.data() }); // Push each document data into the array
    });

    return cartItems; // Return fetched cart items
  } catch (error) {
    console.error("Error fetching cart items: ", error); // Log any errors
    return []; // Return empty array in case of an error
  }
};
