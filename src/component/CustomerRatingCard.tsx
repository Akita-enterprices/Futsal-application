import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";

interface Customer {
  photo: string;
  name: string;
  email: string;
  rating: number;
  feedback: string;
}

interface CustomerRatingCardProps {
  customer: Customer;
}

const CustomerRatingCard: React.FC<CustomerRatingCardProps> = ({
  customer,
}) => {
  const { photo, name, email, rating, feedback } = customer;
  const [expanded, setExpanded] = useState(false);

  const handleReadMoreClick = () => {
    console.log("Button clicked, expanded before:", expanded);
    setExpanded(!expanded);
    console.log("Expanded after:", !expanded);
  };

  return (
    <Card sx={{ width: "100%", margin: "auto", mt: 2 }}>
      <CardHeader
        avatar={<Avatar src={photo} alt={name} />}
        title={name}
        subheader={email}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="div">
          {[...Array(5)].map((_, index) =>
            index < rating ? (
              <Star key={index} color="primary" />
            ) : (
              <StarBorder key={index} />
            )
          )}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          {expanded
            ? feedback
            : `${feedback.substring(0, 100)}${
                feedback.length > 100 ? "..." : ""
              }`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" color="primary" onClick={handleReadMoreClick}>
          {expanded ? "Read Less" : "Read More"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomerRatingCard;
