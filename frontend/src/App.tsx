import { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";
import { getRestaurants, Restaurant } from "./api/restaurants";

const App = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants();
        setRestaurants(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md">
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography
        variant="h1"
        sx={{
          mb: 4,
          fontSize: "2.5rem",
          fontWeight: "bold",
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Restaurants
      </Typography>

      {restaurants.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No restaurants found
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {restaurants.map((restaurant) => (
            <Grid item xs={12} key={restaurant.id}>
              <Card
                sx={{
                  background:
                    "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                  borderRadius: 2,
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                  },
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontWeight: 600,
                      background:
                        "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {restaurant.Name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default App;
