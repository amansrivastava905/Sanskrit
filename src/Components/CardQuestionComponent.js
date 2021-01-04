import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CardQuestionComponent = (props) => {


    // random number generator
    const random = Math.round(Math.random());

    const correctAns = props.slideData.material[random].answer;

    // check option correct or not
    const checkOption = (e) => {
        if (e.target.innerText === correctAns) {
            
            setDialogHead('Correct Answer !');
            setDialogText('Hurray, doing great..');
            setOpen(true);
        }
        else {

            setDialogHead('Wrong Answer !');
            setDialogText('Your option is not correct, try again...');
            setOpen(true);
        }
    }

    //  dialog component states and functions
    const [open, setOpen] = React.useState(false);
    const [DialogHead, setDialogHead]=React.useState('');
    const [DialogText, setDialogText]=React.useState('');
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Div key={props.id}>
                <Heading>{props.slideData.heading}</Heading>
                <Subject>
                    <Question>
                        {props.slideData.material[random].question}
                    </Question>
                    <OptionContainer>
                        {props.slideData.material[random].options.map((e) => {
                            return (
                                <Option onClick={checkOption} id={props.slideData.id}>{e}</Option>
                            )
                        })}
                    </OptionContainer>
                </Subject>
            </Div>

            {/* modal component */}

            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{DialogHead}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {DialogText}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}

export default CardQuestionComponent




const OptionContainer = styled.div`
    margin-top:30px;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    width:60vw;
    @media screen and (max-width:900px)
    {
        width:70vw;
    }
    @media screen and (max-width:500px)
    {
        width:90vw;
    }
`

const Option = styled.button`
    background-color:rgba(63,81,181,0.2);
    border:1px solid rgba(63,81,181,0.5);
    cursor:pointer;
    padding:10px 20px;
    margin:10px;
    outline:none;
    transition:all 0.4s;
    border-radius:30px;
    font-size:24px;
    color:darkblue;
    &:hover{
        background-color:rgba(63,81,181,0.3);
        border:1px solid rgba(63,81,181,0.6);
        transition:all 0.4s;
    }
`

const Question = styled.div`
    padding:20px;
    color:black;
    font-weight:bold;
    font-size:24px;
    background-color:rgba(63,81,181,0.1);
    width:60vw;
    text-align:center;
    @media screen and (max-width:900px)
    {
        width:70vw;
    }
    @media screen and (max-width:500px)
    {
        width:90vw;
    }
`

const Subject = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const Div = styled.div`
    width:60vw;
    min-height:70vh;
    background-color:rgba(63,81,181,0.05);
    border:2px solid rgba(63,81,181,0.1);
    border-radius:20px;
    padding:20px;
    margin:20px 10px;
    backdrop-filter: blur(15px) saturate(100%) contrast(55%) brightness(120%);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media screen and (max-width:900px)
    {
        width:70vw;
    }
    @media screen and (max-width:500px)
    {
        width:90vw;
    }

`

const Heading = styled.h4`
    color:darkblue;
    font-size:36px;
    padding:20px 0px;
    margin-bottom:20px;
`
