import React from 'react'
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],

    }
});

function PopupUpload(props) {

    const { openTrans, children, setOpenTrans, classes } = props;


    return (
        <Dialog
            open={openTrans}
            maxWidth="sm"
        >
            <DialogTitle >
                <div className={classes.closeButton}>
                    <button onClick={() => { setOpenTrans(false) }} style={{ cursor: 'pointer' }} >
                        <CloseOutlinedIcon />
                    </button>
                </div>
            </DialogTitle>
            <DialogContent >
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default withStyles(styles)(PopupUpload);
