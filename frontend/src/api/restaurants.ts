export interface Restaurant {
  id: string;
  Name: string;
}

export const getRestaurants = async (): Promise<Restaurant[]> => {
  try {
    const response = await fetch(
      "https://harmonious-crown-c00eb074d1.strapiapp.com/api/restaurants"
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch restaurants: HTTP ${response.status}`);
    }

    const data = await response.json();

    return data.data;
  } catch (error) {
    let errorMessage = "Failed to fetch restaurants";

    if (error instanceof TypeError) {
      errorMessage = "Network error - please check your internet connection";
    } else if (error instanceof SyntaxError) {
      errorMessage = "Failed to parse restaurant data";
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    throw new Error(errorMessage);
  }
};
