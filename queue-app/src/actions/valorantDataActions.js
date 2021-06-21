import { VAL_CONTENT } from "../action-types/valorantActionTypes";

export default async function fetchVALORANT(dispatch, setGame) {
  setGame("valorant");
  const valAgentsData = await fetch("https://valorant-api.com/v1/agents");
  const valAgentsJson = await valAgentsData.json();

  const valTierData = await fetch(
    "https://valorant-api.com/v1/competitivetiers"
  );
  const valTierJson = await valTierData.json();

  const valData = { ...valTierJson, ...valAgentsJson };

  return dispatch({ type: VAL_CONTENT, payload: valData });
}
