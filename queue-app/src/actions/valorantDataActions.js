import { VAL_CONTENT } from "../action-types/valorantActionTypes";

export default async function fetchVALORANT(dispatch, setGame) {
  setGame("valorant");
  const data = await fetch("https://valorant-api.com/v1/agents");
  const json = await data.json();

  const valTierData = await fetch(
    "https://valorant-api.com/v1/competitivetiers"
  );
  const valTierJson = await valTierData.json();

  return dispatch({ type: VAL_CONTENT, payload: valTierJson.data });
}
