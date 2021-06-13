import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@material-ui/core/";
import "./Post.css";
import img from "../../../image/img.jpg";
import useStyles from "./style.js";
import { Link } from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";

function Post() {
    const classes = useStyles();

    return (
        <div className="cards">

            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image={img} />

                        <Typography className={classes.title} variant="h5" gutterBottom>
                            Kerala relief fund
          </Typography>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Kerala relief fund Kerala relief fund Kerala relief fund Kerala
                                relief fund Kerala relief fund Kerala relief fund Kerala relief
                                fund
            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions className={classes.cardActions}>

                        <Button size="large" className={classes.button}>
                            <Link to="/payment?kerela"> &nbsp; Donate &nbsp;</Link>
                        </Button>

                    </CardActions>
                </Card>
            </div>

            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image={img} />

                        <Typography className={classes.title} variant="h5" gutterBottom>
                            Mumbai relief fund
      </Typography>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Mumbai relief fund Mumbai relief fund Mumbai relief fund Mumbai
                                relief fund Mumbai relief fund Mumbai relief fund Mumbai relief
                                fund
        </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions className={classes.cardActions}>

                        <Button size="large" color="primary" className={classes.button}>
                            <Link to="/payment?mumbai">   &nbsp; Donate &nbsp; </Link>
                        </Button>

                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default Post;