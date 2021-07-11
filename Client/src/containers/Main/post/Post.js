import React, { useEffect, useState, useContext } from "react"
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@material-ui/core/";
import "./Post.css";
import useStyles from "./style.js";
import { Link } from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";

function Post({ stories }) {

    const classes = useStyles();
    const [load, setLoad] = useState([])
    const result = JSON.parse(localStorage.getItem("camps"))

    //console.log(result[0][0].totalAmount)
    return (
        <div className="cards">
            {stories.map((story, index) =>
                <div key={story._id}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia className={classes.media} image={story.selectedFile} />

                            <Typography className={classes.title} variant="h5" gutterBottom>
                                {story.title}
                            </Typography>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {story.message}
                                </Typography>
                            </CardContent>
                            <div className="campDetail">
                                <span>
                                    We Need {(result[0][index].totalAmount - (result[0][index].currentAmount))} from {result[0][index].totalAmount}                                </span>
                            </div>
                        </CardActionArea>

                        <CardActions className={classes.cardActions}>
                            {(!(result[0][index].completed)) ? (
                                <Button size="large" className={classes.button}>
                                    <Link to={`/payment/${++index}`}> &nbsp; Donate &nbsp;</Link>
                                </Button>
                            ) : (
                                    <Button size="large" disabled className={classes.button}>
                                        &nbsp; Donate &nbsp;
                                    </Button>
                                )}

                        </CardActions>
                    </Card>
                </div>
            )}
        </div>
    );
}


export default Post;