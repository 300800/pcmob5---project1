import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react/cjs/react.development";
import { useState } from "react";

const API = "https://gracechong.pythonanywhere.com";
const API_WHOAMI = "/whoami";

export function useUsername() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      if (token == null) {
        setError(true);
        setUsername(null);
      } else {
        try {
          const response = await axios.get(API + API_WHOAMI, {
            headers: { Authorization: `JWT ${token}` },
          });
          setUsername(response.data.username);
        } catch (e) {
          setError(true);
          setUsername(null);
        } finally {
          // this is run regardless of error or not
          setLoading(false);
        }
      }
    })();
    setRefresh(false);
  }, [refresh]);

  //export function useUsername() {
  //async function getUsername() {	  const [username, setUsername] = useState("");
  //console.log("---- Getting user name ----");	  const [error, setError] = useState(false);
  //const token = await AsyncStorage.getItem("token");	  const [loading, setLoading] = useState(false);
  //if (token == null) {	  const [refresh, setRefresh] = useState(false);
  //signoutCallback();
  //return null;	  useEffect(() => {
  //}	    (async () => {
  //console.log(`Token is ${token}`);
  //setLoading(true);
  //try {	const token = await AsyncStorage.getItem("token");
  //const response = await axios.get(API + API_WHOAMI, {
  //console.log(token);
  //headers: { Authorization: `JWT ${token}` },
  //if (token == null) {
  // });
  ////setError(true);
  //console.log("Got user name!");
  //setUsername(null);
  //return response.data.username;
  //console.log("Got user name!");
  //return response.data.username;
  //} catch (error) {
  //console.log("Error getting user name!");
  //signOutCallback();
  // }

  return [username, loading, error, setRefresh];
}
