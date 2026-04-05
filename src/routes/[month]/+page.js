const validMonths = [
  "january","february","march","april",
  "may","june","july","august",
  "september","october","november","december"
];

export function load({ params }) {
  if (!validMonths.includes(params.month)) {
    throw error(404, 'Not found');
  }

  return {
    month: params.month
  };
}