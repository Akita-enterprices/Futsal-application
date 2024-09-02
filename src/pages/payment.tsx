import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  Container,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const Payment: React.FC<{}> = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe.js has not loaded yet.");
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    if (!cardNumberElement || !cardExpiryElement || !cardCvcElement) {
      console.error("Stripe elements not found.");
      return;
    }

    const response = await fetch(
      "http://localhost:4000/api/payments/create-payment-intent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 353500, currency: "LKR" }),
      }
    );

    const { clientSecret } = await response.json();

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardNumberElement,
          billing_details: {
            name: "shadhir", // This can be collected from the form as well
          },
        },
      }
    );

    if (error) {
      console.error("Error confirming card payment:", error);
    } else if (paymentIntent?.status === "succeeded") {
      console.log("Payment successful:", paymentIntent);
      // Handle successful payment (e.g., show a success message)
    }
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <Container
      sx={{
        bgcolor: "#f9f8fd",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: 2, sm: 4 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          mb: 4,
        }}
      >
        <ArrowBackIcon
          onClick={goBack}
          sx={{ color: "#007EF2", cursor: "pointer" }}
        />
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "20px" },
            textAlign: "center",
            color: "#007EF2",
            fontWeight: "bold",
            flexGrow: 1,
          }}
        >
          Payment
        </Typography>
      </Box>

      <Box
        sx={{
          bgcolor: "#e9f5f9",
          padding: { xs: 2, sm: 3 },
          borderRadius: 2,
          width: "100%",
          maxWidth: "500px",
          mb: 4,
        }}
      >
        <Typography textAlign="center">Total Price</Typography>
        <Typography
          sx={{
            color: "#007EF2",
            fontWeight: "bold",
            fontSize: { xs: "24px", sm: "30px" },
            textAlign: "center",
          }}
        >
          RS 3535/=
        </Typography>
        <Typography textAlign="center" sx={{ opacity: "60%" }}>
          5% VAT included
        </Typography>
      </Box>

      <Typography>Payment method</Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "500px",
          mt: 2,
        }}
      >
        <Typography sx={{ opacity: "50%", fontSize: "16px", mb: 1 }}>
          <b>Card Holder Name</b>
        </Typography>
        <TextField placeholder="Your Name" fullWidth sx={{ mb: 2 }} />

        <Typography sx={{ opacity: "50%", fontSize: "16px", mb: 1 }}>
          <b>Card Number</b>
        </Typography>
        <Box
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "10px",
            marginBottom: "20px",
            backgroundColor: "#fff",
          }}
        >
          <CardNumberElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography sx={{ opacity: "50%", fontSize: "16px", mb: 1 }}>
              <b>Expiry date</b>
            </Typography>
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "10px",
                backgroundColor: "#fff",
              }}
            >
              <CardExpiryElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography sx={{ opacity: "50%", fontSize: "16px", mb: 1 }}>
              <b>CVV</b>
            </Typography>
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "10px",
                backgroundColor: "#fff",
              }}
            >
              <CardCvcElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "#0F3D3E",
            "&:hover": {
              bgcolor: "#0F3D3E",
            },
            fontSize: { xs: "16px", sm: "18px" },
            width: "100%",
            borderRadius: 2,
            mt: 3,
            mb: 2,
          }}
        >
          Pay Now
        </Button>
      </Box>
    </Container>
  );
};

export default Payment;
