import React, { useState } from "react";
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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useLocation, useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

const Payment: React.FC<{}> = () => {
  const location = useLocation();
  const { totalAmount } = location.state || {};
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    try {
      const amountInCents = totalAmount * 100;

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/payments/create-payment-intent`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: amountInCents, currency: "LKR" }),
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
        MySwal.fire({
          title: "Payment Failed",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      } else if (paymentIntent?.status === "succeeded") {
        MySwal.fire({
          title: "Payment Successful!",
          text: "Your payment has been processed successfully.",
          icon: "success",
          confirmButtonText: "Great!",
        });
        navigate("/congrats");
        // Handle successful payment (e.g., navigate to a success page)
      }
    } catch (error) {
      MySwal.fire({
        title: "Error",
        text: "An error occurred while processing your payment. Please try again.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } finally {
      setLoading(false);
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
          RS {totalAmount}
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
          disabled={loading}
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
          {loading ? "Processing..." : "Pay Now"}
        </Button>
      </Box>
    </Container>
  );
};

export default Payment;
