import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

//Components
import DeleteButton from "../../Buttons/DeleteButton";
import UpdateButton from "../../Buttons/UpdateButton";

//Styles
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { vendorImage } from "../../../styles";
import useStyles from "../../ProductList/ProductItem/styles";

const VendorItem = ({ vendor }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Link to={`/vendors/${vendor.slug}`}>
        <CardMedia
          className={classes.media}
          image={vendor.image}
          title={vendor.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {vendor.name}
            </Typography>
            <Typography variant="h5">{vendor.price}</Typography>
          </div>
          <Typography variant="h2" color="textSecondary">
            {vendor.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart"></IconButton>
        </CardActions>
      </Link>
    </Card>
  );
};

export default observer(VendorItem);
