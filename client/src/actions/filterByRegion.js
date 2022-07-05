export default function filterByType (payload){
    console.log(payload)
    return {
      type: "FILTER_REGION",
      payload,
    };
  };