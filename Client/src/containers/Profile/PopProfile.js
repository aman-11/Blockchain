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

function PopProfile(props) {

    const { openProfile, children, setOpenProfile, classes } = props;

    
    return (
        <Dialog
            open={openProfile}
            maxWidth="sm"
        >
            <DialogTitle >
                <div className={classes.closeButton}>
                    <button  onClick={()=>{setOpenProfile(false)}} style={{cursor:'pointer'}} >
                        <CloseOutlinedIcon  />
                    </button>
                </div>
            </DialogTitle>
            <DialogContent >
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default withStyles(styles)(PopProfile);
